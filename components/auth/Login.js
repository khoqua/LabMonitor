/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LabMonitor from './LabMonitor'


export default class Login extends React.Component {
  constructor(props){ 
      super(props);
      this.state = {
          email: '',
          password: '',
          registed: false,
          error: '',
          load: false
      }
  }
  componentDidMount(){
    this._loadInitialState().done()
  }
  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('email')
    if (value !== null) {
      this.props.navigation.navigate('LabMonitor')
    }
  }

  login = () => {
    alert(this.state.email + this.state.password)
    this.props.navigation.navigate('LabMonitor')

    /*fetch('http://103.199.7.185/api/login', {
          method: 'POST',
          headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
          })
        })
        .then((response) => response.json())
        .then((res => {
          if (res.success === false){
            AsyncStorage.setItem('emai',res.token);
            this.props.navigation.navigate('LabMonitor')
          }
          else{
            alert("Sai email hoac password")
          }
        }

        ))
      .done();*/
  }

  render(){
  return (
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
      <View style={styles.container}>
        <View style= {styles.up}>
          <Text style={styles.title}>
            LAB MONITOR
          </Text>
        </View>
        <View style= {styles.down}>
          <View style= {styles.textInputContainer}>
            <TextInput 
              style = {styles.textInput}
              onChangeText= {(email) => this.setState({email})}
              textContentType= 'emailAddress'
              keyboardType='email-address'
              placeholder="Enter your email"
              >
            </TextInput>
          </View>
          <View style= {styles.textInputContainer}>
            <TextInput 
              style = {styles.textInput}
              onChangeText= {(password) => this.setState({password})}
              placeholder="Enter your password"
              secureTextEntry={true}
              >
            </TextInput>
          </View>
            <View>
              <TouchableOpacity style={styles.loginButton}
                onPress={this.login}>
                <Text style= {styles.loginButtonTitle}>
                  LOGIN
                </Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgb(149, 195, 200)',
  },
  up: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  down: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    marginTop: 90,
    flex: 2,
    color: 'white',
    textAlign: 'center',
    width: 400,
    fontSize: 32
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  textInput: {
    width: 280,
    height: 45
  },
    loginButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(211, 97, 97)'
  },
    loginButtonTitle: {
      color: 'white',
      fontSize: 18
  }
});
