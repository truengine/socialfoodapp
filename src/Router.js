import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import registration from './components/registration';
import MainMenuScreen from './components/MainScreen';
import AppContainer from './containers/AppContainer';

const RouterComponent = () => {
  return (
    <Router
      sceneStyle={{ paddingTop: 0 }}
    >
    <Scene key="auth" hideNavBar>
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
    onRight={() => Actions.check()}
    rightTitle="Click"
    />
    </Scene>

    <Scene key="check" hideNavBar>
      <Scene
        key="search"
        sceneStyle={{ paddingTop: 0 }}
        component={AppContainer}
      />
      </Scene>
  </Router>
  );
};

export default RouterComponent;

/*
<Scene key="auth" hideNavBar>
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
onRight={() => Actions.check()}
rightTitle="Click"
/>
</Scene>
*/
