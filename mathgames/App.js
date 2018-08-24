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

  buttonPressedApp = event => {
    // console.log(event);
  }

  numberGenerated(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
  }

  render() {
    return (
      <View style={styles.container}>

        <RandomNumberGen numberGenerated1 = {this.numberGenerated} />
        <PressedButtonDisplay />
        <ButtonsDisplayer buttonPressed1={this.buttonPressedApp} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }

});
