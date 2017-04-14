import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import MainMenuScreen from './components/MainScreen';

const RouterComponent = () => {
  return (
    <Router hideNavBar >
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main">
        <Scene key="pick" component={MainMenuScreen} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
