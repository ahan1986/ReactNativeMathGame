import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Button } from 'react-native';
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
        sam: ""
      }

    // if you're using fat arrow syntax, you do not need this bind(this)
    this.buttonPressedApp = this.buttonPressedApp.bind(this);
}


  buttonPressedApp(event) {
    const numToChange = this.state.typedNumber = [...this.state.typedNumber, event].join(''); 
    this.setState({
      typedNumber:  numToChange
    });

    
    console.log(this.state.typedNumber)
  }

  numberGenerated = (a, b, c) => {
    
    let generatedNums = {
      firstNum: a,
      operator: b,
      secondNum: c
    }
  }

 onChangeHandler = (event) => {

 }


  render() {
    return (
      <View style={styles.container}>

        <RandomNumberGen numberGenerated1 = {this.numberGenerated} />
      
        <PressedButtonDisplay typed={this.state.typedNumber} />
        
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
