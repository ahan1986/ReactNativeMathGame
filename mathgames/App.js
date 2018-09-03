import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Button } from 'react-native';
import ButtonsDisplayer from './components/NumButtons/ButtonsDisplayer';
import PressedButtonDisplay from './components/PressedButtonDisplayer/PressedButtonDisplay';
import RandomNumberGen from './components/RandomNumberGen/RandomNumberGen';
import RandNumDisplayer from './components/RandomNumberGen/RandNumDisplayer';
import { Provider } from 'react-redux';

// importing redux
import { createStore, combineReducers, applyMiddleware } from 'redux';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typedNumber: [],
      generatedNum: [],
      firstNum: "",
      operator: "",
      secondNum: ""
    }

    // if you're using fat arrow syntax, you do not need this bind(this)
    this.buttonPressedApp = this.buttonPressedApp.bind(this);
    this.equationGenerator = this.equationGenerator.bind(this);

  }

  componentDidMount() {

    this.equationGenerator();
    
  }


  buttonPressedApp(event) {
    const numToChange = this.state.typedNumber = [...this.state.typedNumber, event].join('');
    this.setState({
      typedNumber: numToChange
    });
  }

  numberGenerated = (a, b, c) => {

    let generatedNums = {
      firstNum: a,
      operator: b,
      secondNum: c
    }
  }

  equationGenerator() {
    let first, operator = ['+'], second;
    const randOperator = operator[Math.floor(Math.random() * operator.length)];

    // each case should use the component RandNumDisplayer to display the equations on to the screen
    switch (randOperator) {
      case '+':
        first = Math.floor(Math.random() * 100);
        second = Math.floor(Math.random() * 100);

        // returning the generated number plus the operator back to the app.js
        // this.state.numberGen(first, randOperator, second);
        this.setState({
          firstNum: first,
          operator: randOperator,
          secondNum: second
        });
        
        break;

      case '-':
        first = Math.floor(Math.random() * 100);
        second = Math.floor(Math.random() * 100);

        // returning the generated number plus the operator back to the app.js
        // this.state.numberGen(first, randOperator, second);
        this.setState({
          firstNum: first,
          operator: randOperator,
          secondNum: second
        });
        // if/else statement to reverse 'second' number if the number is greater than the 'first'. This is so that the user doesn't need to use a negative number as an answer.
        if (first < second) {
          this.setState({
            firstNum: second,
            operator: randOperator,
            secondNum: first
          });

        } else {

          this.setState({
            firstNum: first,
            operator: randOperator,
            secondNum: second
          });

        }

        break;

      case '*':
        first = Math.floor(Math.random() * 100);
        second = Math.floor(Math.random() * 10);

        // returning the generated number plus the operator back to the app.js
        // this.state.numberGen(first, randOperator, second);
        this.setState({
          firstNum: first,
          operator: randOperator,
          secondNum: second
        });

        break;

      case '/':

        first = Math.floor(Math.random() * 100);
        second = Math.floor(Math.random() * 10);

        //creating while loop so that dividing 'first' and 'second' will produce a whole number. So here, we will add 1 to the first number until it's divisible.
        while (first % second !== 0) {
          first++
        }

        // returning the generated number plus the operator back to the app.js
        // this.state.numberGen(first, randOperator, second);
        this.setState({
          firstNum: first,
          operator: randOperator,
          secondNum: second
        });

        break;

      default:
        <Text>Andrew A. Han, Baby!</Text>
    }

  }


  render() {
    return (
      <View style={styles.container}>

        {/* <RandomNumberGen numberGenerated1 = {this.numberGenerated} /> */}

        {/* {this.equationGenerator} */}
        <RandNumDisplayer numOne={this.state.firstNum} randOp={this.state.operator} numTwo={this.state.secondNum} />

        <PressedButtonDisplay typed={this.state.typedNumber} />

        <ButtonsDisplayer buttonPressed1={this.buttonPressedApp} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    flex: 2,
    backgroundColor: 'orange'
  }
});
