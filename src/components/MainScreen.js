import React, { Component } from 'react';
import { View } from 'react-native';
import { NibblHeader, FoodTypeCard, BottomHalfMenu } from './mainScreenComponents';

class MainMenuScreen extends Component {
  render() {
    return (
      <View>
        <NibblHeader />
        <FoodTypeCard />
        <BottomHalfMenu />
      </View>
    );
  }
}
 export default MainMenuScreen;
