import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


class Profile extends React.Component {

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
            <Text>
                User name: admin
                Email: labadmin@tma.com.vn 
            </Text>
            </View>
        );
    }
}

export default Profile;