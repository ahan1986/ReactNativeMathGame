import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import ButtonsDisplayer from './components/NumButtons/ButtonsDisplayer';
import PressedButtonDisplay from './components/PressedButtonDisplayer/PressedButtonDisplay';
import RandomNumberGen from './components/RandomNumberGen/RandomNumberGen';
import { Provider } from 'react-redux';

// importing redux
import { createStore, combineReducers, applyMiddleware } from 'redux';

export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        typedNumber: ['bobdole'],
        firstNum: '',
        operator: '',
        secondNum: ''
      }
    this.numberGenerated = this.numberGenerated.bind(this);
}

  buttonPressedApp = event => {
    let numToChange = this.state.typedNumber = [...this.state.typedNumber, event].join(''); 
    this.setState = ({
      typedNumber:  numToChange
    });
    
    console.log(event)
  }

  numberGenerated = (a, b, c) => {
    
    let generatedNums = {
      firstNum: a,
      operator: b,
      secondNum: c
    }
  }



  render() {
    return (
      <View style={styles.container}>

        <RandomNumberGen numberGenerated1 = {this.numberGenerated} />
        <TouchableWithoutFeedback onPressIn={() => this.buttonPressedApp}>
          <PressedButtonDisplay typed={this.state.typedNumber} />
          
        </TouchableWithoutFeedback>
        <Text>{this.state.typedNumber} </Text>
        
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
