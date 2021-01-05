import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';


class LabsListItem extends Component {

    render() {
        const { title, image, address, city, rating, status, key } = this.props.item
        return (
            <View style={styles.container}>
                <Image source={image} style={styles.foodBG} />
                <View style={[styles.textContainer, { justifyContent: 'flex-end' }]}>
                    <Text style={styles.title}> {title}</Text>
                    <Text lineBreakMode='tail' numberOfLines={1} style={styles.subTitle}>{address}</Text>
                    <Text lineBreakMode='tail' numberOfLines={1} style={styles.city}>{city}</Text>
                    <Text lineBreakMode='tail' numberOfLines={1} style={styles.status}>{status}</Text>
                </View>
            </View>

        );
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#dddddd',
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: '#dddddd',
        shadowOffset: { width: 0, height: 1.0 },
        shadowRadius: 4,
        shadowOpacity: 0.5,
        borderColor: '#dddddd',
        borderWidth: 1
    },
    foodBG: {
        width: 100,
        height: 100,
        borderRadius: 5,
        overflow: 'hidden',
    },
    title: {
        fontSize: 18,
        marginLeft: 8,
        color: 'black',
    },
    subTitle: {
        fontSize: 13,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 5,
        color: 'rgb(80,80,80)',
    },
    city: {
        fontSize: 14,
        paddingTop: 5,
        marginLeft: 10,
        color: 'rgb(80,80,80)',
    },
    status: {
        fontSize: 14,
        marginLeft: 10,
        marginRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
        color: 'blue',
    },
    textContainer: {
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        flex: 1,
        borderRadius: 5

    }
}

export default LabsListItem;