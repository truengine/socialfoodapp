import { StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import SplashScreen from './components/splashScreen/splashScreen';

import AppContainer from './containers/AppContainer';

const styles = StyleSheet.create({
  splashScreenContainer: {
    backgroundColor: '#5A646D'
  }
});
class App extends Component {
  componentWillMount() {
    const config = {
        apiKey: 'AIzaSyBzYmKognrP4Eqmo2nIR29U-r90hQ_3hK4',
        authDomain: 'nibble-44b5b.firebaseapp.com',
        databaseURL: 'https://nibble-44b5b.firebaseio.com',
        projectId: 'nibble-44b5b',
        storageBucket: 'nibble-44b5b.appspot.com',
        messagingSenderId: '659969566926'
      };
      firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <SplashScreen
      duration={3000}
      logo={require('../assets/logo/splash.png')}
      backgroundColor={styles.splashScreenContainer}
      >
        <Provider store={store}>
            <Router />
        </Provider>
        </SplashScreen>
    );
  }
}


export default App;
