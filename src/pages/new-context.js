import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FlagIcon } from "react-flag-kit";
//创建Context
const ThemeContext = React.createContext();
const localMap = {
  "en-US": { locale: "en-US", flag: "US", content: "Hello, World!" },
  "fr-FR": { locale: "fr-FR", flag: "FR", content: "Bonjour le monde!" },
  "es-ES": { locale: "es-ES", flag: "ES", content: "¡Hola Mundo!" }
};

//1. 创建生产者
class LocalSwitcher extends Component {
  state = localMap['en-US'];
  render() {

    return (
      <ThemeContext.Provider
        value={{
          state: this.state,
          updateLocale: e => this.setState(localMap[e.target.value])
        }}
        >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

//2. 创建消费者
const LocaleSelect = () => {
  return (
    <ThemeContext.Consumer>
      {context => (
        <select value={ context.state.locale } onChange={ context.updateLocale }>
          <option value="en-US">English</option>
          <option value="fr-FR">French</option>
          <option value="es-ES">Spanish</option>
        </select>
      )}
    </ThemeContext.Consumer>
  )
}

//3. 消费者， 显示国旗
const LoaclFlag = (props) => {
  return (
    <ThemeContext.Consumer>
      {
        context => <FlagIcon code={context.state.flag} size={256}/>
      }
    </ThemeContext.Consumer>
  )
}

//4. 消费者显示内容
const LocaleContent = (props) => {
  return (
    <ThemeContext.Consumer>
      { context => <h1>{ context.state.content }</h1> }
    </ThemeContext.Consumer>
  )
}

class NewContext extends Component {

  render() {
    const color = 'red';
    return (
      <LocalSwitcher>
        <LocaleSelect />
        <LoaclFlag/>
        <LocaleContent />
      </LocalSwitcher>
    );
  }
}
export default NewContext;
