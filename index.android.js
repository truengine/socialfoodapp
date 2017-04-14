import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import FoodTypeCard from './src/components/FoodTypeCard';
import BottomHalfMenu from './src/components/BottomHalfMenu';


const App = () => (
    <View>
        <Header />
        <FoodTypeCard />
        <BottomHalfMenu/>
    </View>
);

AppRegistry.registerComponent('socialfoodapp', () => App);