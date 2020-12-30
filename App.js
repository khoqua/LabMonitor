//import App from './app/index';
//export default App;

import { StatusBar } from 'react-native';
import React, {Component} from 'react';
import { createStackNavigator} from "react-navigation-stack"
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from './app/screens/Login';
import Labs from './app/screens/Labs';
import SplashScreen from './app/screens/SplashScreen';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
      backgroundColor: 'transparent',
      position: 'absolute',
      height: 50,
      top: 0,
      left: 0,
      right: 0,
    },
});

const SwitchNavigator = createSwitchNavigator({
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        headerStyle: styles.header,
      }
      },

    Login: {
      screen: Login,
      title: 'Login',
      navigationOptions: {
        headerStyle: styles.header,
      }
    },
    Labs: {
      screen: Labs,
      title: 'TMA Labs',
      navigationOptions: {
        headerStyle: styles.header,
      }
    },
  },
  /*{
    headerMode: 'screen',
}*/
);


export default class App extends Component<Props> {
  render() {
    return <AppNavigator/>;
  }
}

const AppNavigator = createAppContainer(SwitchNavigator);


