import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import PropTypes from 'prop-types';

//import styles from './styles';

const LogoutButton = ({ onPress }) => (
      <TouchableOpacity
        style={styles.toolbarButton}
        onPress={onPress}
      >
      <Text style={{color: '#fff'}}> Logout </Text>
      </TouchableOpacity>
);

LogoutButton.propTypes = {
  onPress: PropTypes.func,
};

const ACCESS_TOKEN = 'access_token';

const data = [
  { key: 'A' }, { key: ACCESS_TOKEN }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' }, { key: 'I' }, { key: 'J' },
  // { key: 'K' },
  // { key: 'L' },
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 2;
export default class Labs extends React.Component {
    constructor(props){
        super(props)
        this.value = this.props.navigation.getParam("token")
    }
    handleLogoutButtonPress = () => {
    try {
        AsyncStorage.removeItem(ACCESS_TOKEN);
        this.props.navigation.navigate('Login'); 
        console.log("Logged Out")
    } catch(error) {
        console.log("Something went wrong")
    }
}


  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View
        style={styles.item}>
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
      //  <StatusBar translucent={false} barStyle="light-content" />
      //  <Text style={styles.title}>
      //  TMA Labs: {this.value}
      //  </Text>
      //  <View style={styles.buttonContainer}>
       //     <LogoutButton onPress={this.handleLogoutButtonPress}/>
       // </View>
    );
  };

  render() {
    return (
      <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
      buttonContainer: {
        flexDirection:'row',
        justifyContent: 'center',
        paddingHorizontal: 10
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
    fontSize: 15
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