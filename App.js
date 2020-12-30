//import App from './app/index';
//export default App;

import { StatusBar } from 'react-native';
import React, {Component} from 'react';
import { createStackNavigator} from "react-navigation-stack"
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from './app/screens/Login';
import Labs from './app/screens/Labs';

import { StyleSheet } from 'react-native';

const StackNavigator = createStackNavigator({
    Login: {
      screen: Login,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    },
    Labs: {
      screen: Labs,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    },
  },
  {
    headerMode: 'screen',
}
);


export default class App extends Component<Props> {
  render() {
    return <AppNavigator/>;
  }
}

const AppNavigator = createAppContainer(StackNavigator);

