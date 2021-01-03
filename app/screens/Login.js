import React from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';

const ACCESS_TOKEN = 'access_token';

const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Labs' })],
});

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            email: "",
            password: "",
            error: ""
        }
    }

    componentDidMount(){
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {
        let token = await AsyncStorage.getItem(ACCESS_TOKEN);
        if (token !== null) {
            this.props.navigation.navigate('Labs'); 
        }
    }
    

    async storeToken(token) {
        try {
            await AsyncStorage.setItem(ACCESS_TOKEN, token);
            this.getToken();
        } catch(error) {
            console.log("Something went wrong")
        }
    }

    async getToken() {
        try {
            let token = await AsyncStorage.getItem(ACCESS_TOKEN);            
            console.log("token is:" + token);
        } catch(error) {
            console.log("Something went wrong")
        }
    }

    async onLoginButtonPress() {
        try {
            let response = await fetch('http://103.199.7.185/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            });
            alert(this.state.email + this.state.password)

            let res = await response.json();
            if (response.status >= 200 && response.status < 300) {
                this.setState({error: ""});
                let token = res.token;
                this.storeToken(token);  
                alert(this.storeToken(token))                     
                console.log("Response success is: " + token); 
                if(!token) {
                    this.props.navigation.navigate('Login');
                } else {
                    this.props.navigation.navigate('Labs');
                }
            } else {
                alert('Invalid email or password') 
                // Just for issue cannot connect to authen server
                this.props.navigation.navigate('Labs');
            }
        } catch(error){
            console.log("catch error: " + error);
            let formError = JSON.parse(error);
            let errorArray = [];
            for(let key in formError) {
                if(formError[key].length > 1){
                    formError[key].map(error => errorArray.push(`${key} ${error}`))
                } else {
                    errorArray.push(`${key} ${formError[key]}`)
                }
            }
            this.setState({error: errorArray});
        }
    }

    render() {
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
                     onPress={this.onLoginButtonPress.bind(this)}>
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
}

export default Login;

const styles = StyleSheet.create({
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    error: {
        color: 'red',
        paddingTop: 10
    },
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


