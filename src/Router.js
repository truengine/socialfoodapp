import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import registration from './components/registration';
import MainMenuScreen from './components/MainScreen';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 60 }}>
      <Scene key="auth">
        <Scene
          key="login"
          component={LoginForm}
          title="Please Login"
          onRight={() => Actions.regScene()}
          rightTitle="Create Account"
        />
        <Scene key="regScene" component={registration} />
      </Scene>

      <Scene key="main" hideNavBar>
        <Scene
          sceneStyle={{ paddingTop: 0 }}
          key="pick"
          component={MainMenuScreen}
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
