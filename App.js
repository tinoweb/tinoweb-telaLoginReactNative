import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from './styles/grid'
import { StackNavigator } from 'react-navigation';
import Login from './screen/Login/Login';

export default StackNavigator ({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Autenticação',
    },
  }
});
