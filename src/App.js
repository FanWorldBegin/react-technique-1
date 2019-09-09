import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Context from './pages/Context';
import HigherOrderComponents from './pages/errorBoundary/error-boundary';
import HigherOrderComponentDemo from './pages/higher-order-components-demo';
import DefaultProps from './pages/defaultProps-Proptypes';
import RenderProps from './pages/renderProps';
import ErrorBoundary from './pages/errorBoundary/error-boundary';
import NewContext from './pages/new-context';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Children from './pages/children';
import StyledComponents from './pages/style-component';
import ReduxFrom from './pages/reduxForm';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Portals from './pages/portals';
import PortalsModal from './pages/portalModal/index'
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar />
          <Jumbotron title="About Me!" subtitle="This page is all about me and my work!"/>
          <Route exact path='/' component={Home}/>
          <Route path='/contact' component={Contact}/>
          <Route exact path='/contact/:id' component={Contact}/>
          <Route path='/about' component={About}/>
          <Route path='/context' component={Context}/>
          <Route path='/highterOrderComponents' component={HigherOrderComponents}/>
          <Route path='/highterOrderComponentsDemo' component={HigherOrderComponentDemo}/>
          <Route path='/defaultProps' component={DefaultProps}/>
          <Route path='/renderProps' component={RenderProps}/>
          <Route path='/errorBoundary' component={ErrorBoundary}/>
          <Route path='/newContext' component={NewContext}/>
          <Route path='/children' component={Children}/>
          <Route path='/styledComponents' component={StyledComponents}/>
          <Route path='/portals' component={Portals}/>
          <Route path='/portalsModal' component={PortalsModal}/>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
