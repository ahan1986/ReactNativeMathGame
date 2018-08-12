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
    return (
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
    )
  }

  numButtonsGeneration3 = () => {
    let buttons3 = ['7', '8', '9'];
    return (
      buttons3.map(a => {
        return (
          <NumButtons
            buttonPressed={this.buttonPressed}
            num={a}
            key={a}
          />
        )
      }
      )
    );
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'flex-start', flexWrap: 'wrap' }}>
          <View style={{ width: 50, height: 50, marginHorizontal: 10, }}>
            {this.numButtonsGeneration1()}
          </View>
        </View>

        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <View style={{ width: 50, height: 50, marginHorizontal: 10, }}>
            {this.numButtonsGeneration2()}
          </View>
        </View>

        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          <View style={{ width: 50, height: 50, marginHorizontal: 10, }}>
            {this.numButtonsGeneration3()}
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },

});
