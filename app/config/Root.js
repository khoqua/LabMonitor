import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { Dimensions } from 'react-native'
import React, { Component } from 'react';

import Labs from '../screens/Labs'
import LabsList from '../components/LabsList'
import DrawerMenu from '../components/Drawer'
import Logout from '../components/Logout'
import Login from '../screens/Login'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const LabsNavigator = createStackNavigator({
    Labs,
},
    {
        initialRouteName: 'Labs',
        /*defaultNavigationOptions: {
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
        },*/
      navigationOptions: {
      headerShown: false,
      },
    });

const LabsListNavigator = createStackNavigator({
    LabsList,
},
    {
        initialRouteName: 'LabsList',
        /*defaultNavigationOptions: {
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
        },*/
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
const LoginNavigator = createStackNavigator({
    Login,
},
    {
        initialRouteName: 'Login',
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
const DrawerNavigator = createDrawerNavigator({
    LabsScreen: LabsNavigator,
    LabsListScreen: LabsListNavigator,
   // LogoutScreeen: LogoutNavigator,
    LoginScreeen: LoginNavigator
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

export default class Root extends Component<Props> {
  render() {
    return <AppDrawerNavigator/>;
  }
}

const AppDrawerNavigator = createAppContainer(DrawerNavigator);

//export default RootController = createAppContainer(DrawerNavigator);