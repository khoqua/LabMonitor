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

export default class LabMonitor extends React.Component {
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
