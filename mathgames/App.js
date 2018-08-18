import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonsDisplayer from './components/NumButtons/ButtonsDisplayer';
import PressedButtonDisplay from './components/PressedButtonDisplayer/PressedButtonDisplay';
import RandomNumberGen from './components/RandomNumberGen/RandomNumberGen';

// importing redux
import { createStore} from 'redux';

export default class App extends React.Component {
  state = {
    typedNumber: []
  }

  

  render() {
    return (
      <View style={styles.container}>

        <RandomNumberGen />
        <PressedButtonDisplay />
        <ButtonsDisplayer />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }

});
