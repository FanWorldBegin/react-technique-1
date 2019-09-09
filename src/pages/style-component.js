import React, { Component, PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../logo.svg';
//生成一个组件，组件是包含样式的
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const AppWrapper = styled.div`
  text-align: center;
`;

const AppHeader = styled.div`
  background-color: ${ props => props.isBlack ? '#222' : "red" };
  height: 150px;
  padding: 20px;
  color: white;
  @media (min-width: 800px) {
    background-color: blue;
  }
`;

const AppIntro = styled.p`
  font-size: large;
`;

const AppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AppLogo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 80px;
`;

const AppTitle = styled.h1`
  font-size: 1.5em;
`;

class StyledComponents extends Component {

  render() {
    return (
      <AppWrapper>
        <AppHeader isBlack={false}>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </AppWrapper>
    );
  }
}

export default StyledComponents

