import React, { Component } from 'react';
import { Text, View, StatusBar, FlatList, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native';
import LabsListItem from './LabsListItem';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { height, width } = Dimensions.get('window');


class LabsList extends Component {

  static navigationOptions = {
    headerShown: false,
  }

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title');

    return (
      <View>
        <StatusBar barStyle='light-content' />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text
              style={styles.headerText}>
              {title}
            </Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => this.onMenuPress()}>
              < MaterialCommunityIcons name='menu' size={35} style={{ paddingLeft: 10, color: 'black' }} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Monitoring Screen</Text>
          </View>
          <View>
            <Text>
              In Development
            </Text>
          </View>
        </View>
      </View>
    );
  }
  onMenuPress() {
    this.props.navigation.openDrawer();
  }
}

const renderCustomItems = (item, index) => {
  return (
    <LabsListItem item={item} />
  );
};



const styles = {
  container: {
    height: height,
    width: width,
    backgroundColor: 'white',
  },
  flatListContainer: {
    height: height - 170,
    width: width,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 60
  },
  searchIcon: {
    marginLeft: 10,
    height: 25,
    width: 25,
    marginTop: 8
  },
  textInput: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5
  },
  searchContainer: {
    flexDirection: 'row',
    height: 40,
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: 'white',
    shadowRadius: 3,
    shadowOpacity: 0.5,
    shadowOffset: { height: 1.0, width: 0 },
    shadowColor: '#dddddd'
  },
  headerText: {
    fontSize: 20,
    fontWeight: '400',
    paddingLeft: 20,
    textTransform: 'capitalize'
  }
};

export default LabsList;