import {View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import PropTypes from 'prop-types';

import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Gridview from '../components/LabsInfo'

//import styles from './styles';

class HeaderIcon extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Labs</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

export default class Labs extends React.Component{
  render() {
    return(
      <View>
       <HeaderIcon/>
       <Gridview/>
      </View> 
    );
  }
}