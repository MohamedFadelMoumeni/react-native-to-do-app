import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/Home';


const navigator = createStackNavigator({
  Home: HomeScreen
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'To Do App',
    cardStyle: { backgroundColor: '#FFFFFF' }
  }
})

export default createAppContainer(navigator);


