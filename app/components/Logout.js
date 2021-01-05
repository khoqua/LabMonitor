import React from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';


import AsyncStorage from '@react-native-community/async-storage';

const ACCESS_TOKEN = 'access_token';

class Logout extends React.Component {

    handleLogoutButtonPress = () => {
        try {
            AsyncStorage.removeItem(ACCESS_TOKEN);
            this.props.navigation.navigate('Login'); 
            console.log("Logged Out")
        } catch(error) {
            console.log("Something went wrong")
        }
    }

    render() {
        return (
            <View>
                Logout
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection:'row',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
});

export default Logout;