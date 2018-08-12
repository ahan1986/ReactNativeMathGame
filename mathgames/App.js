import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumButtons from './components/NumButtons';


export default class App extends React.Component {

  buttonPressed = (event) => {
    console.log(event);
    console.log("hello");
  }

  // NEED TO FIX THIS. TRYING TO GENERATE BUTTONS USING LOOPS.... NO LUCK
  numButtonsGeneration1 = () => {
    let buttons1 = ['1', '2', '3',];
    return (
      buttons1.map(d => {
        return (
          <NumButtons
            buttonPressed={this.buttonPressed}
            num={d}
            key={d}
          />
        )
      }
      )
    )
  }

  numButtonsGeneration2 = () => {
    let buttons2 = ['4', '5', '6', '0'];
    buttons2.map(c => {
      return (
        <NumButtons
          buttonPressed={this.buttonPressed}
          num={c}
          key={c}
        />
      )
    }
    )
  }

  numButtonsGeneration3 = () => {
    let buttons3 = ['7', '8', '9'];
    buttons3.map(a => {
      return (
        <NumButtons
          buttonPressed={this.buttonPressed}
          num={a}
          key={a}
        />
      )
    }
    );
  }

  render() {
    return (
      <View>
          <View style={styles.container}>
            {this.numButtonsGeneration1()}
          </View>

          <View style={styles.container}>
            {this.numButtonsGeneration2()}
          </View>

          <View style={styles.container}>
            {this.numButtonsGeneration3()}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
