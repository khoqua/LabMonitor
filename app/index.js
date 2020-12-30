
import React, {Component} from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import SplashScreen from './screens/Login';
import App from '../App';


const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  Home: App
});

export default createAppContainer(InitialNavigator);
