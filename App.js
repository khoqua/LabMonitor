import React, {Component} from 'react';
import { createStackNavigator} from "react-navigation-stack"
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from './app/screens/Login';
import Labs from './app/screens/Labs';
import SplashScreen from './app/screens/SplashScreen';

import { StyleSheet } from 'react-native';

const StackNavigator = createStackNavigator({
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
      header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
      header: null,
      },
    },
    Labs: {
      screen: Labs,
      navigationOptions: {
      header: null,
      },
    },
  },
);


export default class App extends Component<Props> {
  render() {
    return <AppNavigator/>;
  }
}

const AppNavigator = createAppContainer(StackNavigator);




