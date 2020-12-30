import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './components/auth/Login' 
import LabMonitor from './components/auth/LabMonitor' 

const Stack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TMA Labs" component={LabMonitor} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
