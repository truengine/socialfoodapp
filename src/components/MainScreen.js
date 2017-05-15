import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { NibblHeader, FoodTypeCard, BottomHalfMenu } from './mainScreenComponents';

class MainMenuScreen extends Component {
  regButtonPress() {
    Actions.check();
  }
  burgerPress() {
    Actions.auth();
  }

  render() {
    return (
      <View>
        <NibblHeader onPress={this.burgerPress.bind()} />
        <FoodTypeCard />
        <BottomHalfMenu onPress={this.regButtonPress.bind()} />
      </View>
    );
  }
}
 export default MainMenuScreen;
