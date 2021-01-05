/*import React, {Component} from 'react';
import { createStackNavigator} from "react-navigation-stack"
import { createAppContainer } from 'react-navigation'

import Login from './app/screens/Login';
import Root from './app/config/Root';
import SplashScreen from './app/screens/SplashScreen';

import { StyleSheet } from 'react-native';

const StackNavigator = createStackNavigator({
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
      headerShown: false,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
      headerShown: false,
      },
    },
    Root: {
      screen: Root,
      navigationOptions: {
      headerShown: false,
      },
    },
  },
);


export default class App extends Component<Props> {
  render() {
    return <AppNavigator/>;
  }
}

const AppNavigator = createAppContainer(StackNavigator);*/

//==================================================================
import React, {Component} from 'react';
import Login from './app/screens/Login';
import Root from './app/config/Root';
import SplashScreen from './app/screens/SplashScreen';

import { StyleSheet } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { Dimensions } from 'react-native'

import Labs from './app/screens/Labs'
import LabsList from './app/components/LabsList'
import DrawerMenu from './app/components/Drawer'
import Profile from './app/screens/Profile'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const StackNavigator = createStackNavigator({
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
      headerShown: false,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
      headerShown: false,
      },
    },
    Labs: {
      screen: Labs,
      navigationOptions: {
      headerShown: false,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
      headerShown: false,
      },
    },
  },
);

const LabsNavigator = createStackNavigator({
    Labs,
},
    {
      initialRouteName: 'Labs',
      navigationOptions: {
      headerShown: false,
      },
    });

const LabsListNavigator = createStackNavigator({
    LabsList,
},
    {
      initialRouteName: 'LabsList',
      navigationOptions: {
      headerShown: false,
      },
    });
/*
const LogoutNavigator = createStackNavigator({
    Logout,
},
    {
        initialRouteName: 'Logout',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f7f7f7'
            },
            headerTintColor: 'gray',
            gestureEnabled: false,
            drawerLockMode: 'locked-closed',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            layout: {
                orientation: ["portrait"],
            },
        },
    });
*/
const DrawerNavigator = createDrawerNavigator({
    StackNavigatorScreen: StackNavigator,
    LabsScreen: LabsNavigator,
    LabsListScreen: LabsListNavigator
}, {
    initialRouteName: 'LabsScreen',
    drawerBackgroundColor: 'red',
    contentComponent: DrawerMenu,
    drawerLockMode: "locked-closed",
    disableGestures: true,
    drawerWidth: screenWidth - 60,
    edgeWidth: 0,
    contentOptions: {
        activeTintColor: 'yellow',
    },
    layout: {
        orientation: ["portrait"],
    },
});

export default class App extends Component<Props> {
  render() {
    return <AppDrawerNavigator/>;
  }
}

const AppDrawerNavigator = createAppContainer(DrawerNavigator);

//export default RootController = createAppContainer(DrawerNavigator);



