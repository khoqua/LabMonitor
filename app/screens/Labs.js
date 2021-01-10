import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, View, StatusBar, FlatList, Dimensions, Image } from 'react-native';
import LabsInfo from '../components/LabsInfo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ACCESS_TOKEN = 'access_token';


const Labslist = [
    {
        key: '0',
        title: '1Click',
        image: require('../image/Lab8.jpg'),
        backgroundColor: '#59b2ab',
    },
    {
        key: '1',
        title: 'Lab Nokia',
        image: require('../image/Lab8.jpg'),
        backgroundColor: '#febe29',
    },
    {
        key: '2',
        title: 'Contact Center',
        image: require('../image/Lab8.jpg'),
        backgroundColor: '#22bcb5',
    },
    {
        key: '3',
        title: 'Lab 5',
        image: require('../image/Lab8.jpg'),
        backgroundColor: '#22bcb5',
    },
    {
        key: '4',
        title: 'Lab 6',
        image: require('../image/Lab8.jpg'),
        backgroundColor: '#22bcb5',
    },

    {
        key: '5',
        title: 'TIP',
        image: require('../image/Lab8.jpg'),
        backgroundColor: '#22bcb5',
    }
];

const { height, width } = Dimensions.get('window');
const numColumns = 1;

class Labs extends Component {

    static navigationOptions = {
        headerShown: false,
    }

    constructor(props){
    super(props);
    this.state = {
      labs: [],
      load: true,
      labsinfo: ""
    }
    }

    componentDidMount(){
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {

        
        let token = await AsyncStorage.getItem(ACCESS_TOKEN);
       // alert('Token in lab' + token)
        //if (token !== null) {
       // alert('Token OK')
       // }
        try {
            let response = await fetch('http://103.199.7.185/api/device', {
                method: 'GET',
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
            });
            let res = await response.json();
            if (response.status >= 200 && response.status < 300) {
                alert('Your session is not expired')
                let labs = res[0].device_id; 
                console.log("device_id: "  + labs)

              //============================================================
                try {
                    let response = await fetch('http://103.199.7.185/api/get_device_info/' + labs, {
                        method: 'GET',
                            headers: {
                            Authorization: `Bearer ${token}`,
                            },
                    });
                    let res1 = await response.json();
                    if (response.status >= 200 && response.status < 300) {
                        let labsinfo = res1.device_name; 
                        console.log("device_id: "  + labsinfo)
                    } else {
                        alert('Something wrong')
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

              //============================================================
            } 
            else {
                alert('Your session has expired. Please log in again.')
                AsyncStorage.removeItem(ACCESS_TOKEN);
                this.props.navigation.navigate('Login');
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
    sendToLabsListScreen(index) {
        let labs = Labslist[index]
        this.props.navigation.navigate('LabsList', { title: labs.title });
    }
    render() {
        return (
            <View>
                <StatusBar barStyle='default' />
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => this.onMenuPress()}>
                            < MaterialCommunityIcons name='menu' size={35} style={{ paddingLeft: 10, color: 'black' }} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Labs Monitor</Text>
                    </View>

                    <FlatList
                        data={Labslist}
                        numColumns={numColumns}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity onPress={this.sendToLabsListScreen.bind(this, index)}>
                                    <LabsInfo item={item} />
                                </TouchableOpacity>
                            );
                        }
                        }
                    />
                </View>
            </View>
        );
    }

    onMenuPress() {
        this.props.navigation.openDrawer();
    }

}

const renderCustomItems = (item) => {
    return (
        <TouchableOpacity onPress={this.sendToLabsListScreen.bind(this)}>
            <LabsInfo item={item} nav={navigation} />
        </TouchableOpacity>
    );
};



const styles = {
    container: {
        height: height,
        width: width,
        backgroundColor: '#f7f7f7',
    },
    header: {
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: '500',
        paddingLeft: 10
    }
};


export default Labs;