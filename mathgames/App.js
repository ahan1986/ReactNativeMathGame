import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Game from './components/game';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}} >
        <Game />
      </View>
    )
  }
}