import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumButtons from './components/NumButtons';


export default class App extends React.Component {

  buttonPressed = (event) => {
    console.log(event);
    console.log("hello");
  }

  numButtonsGeneration = () => {
    let buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

return (
    buttons.map(x => {
      return (
        <NumButtons
          buttonPressed={this.buttonPressed}
        />
      )
    })
  )


  }

  render() {
    return (
      <View style={styles.container}>
        {this.numButtonsGeneration}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
