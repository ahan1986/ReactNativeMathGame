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
    let buttons1 = ['1', '4', '7',];
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
    let buttons2 = ['2', '5', '8', '0'];
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
    let buttons3 = ['3', '6', '9', 'DEL'];
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

        <View style={{ flex: 3, flexDirection: 'row', backgroundColor: 'purple' }}>
        </View>

        <View style={{ flex: 4, flexDirection: 'row' }}>
          <View style={{ flex: 1, margin: 10, backgroundColor: 'yellow' }}>
            <View style={{ width: 100, height: 50 }}>
              {this.numButtonsGeneration1()}
            </View>
          </View>

          <View style={{ flex: 1, margin: 10, alignItems: 'center', backgroundColor: 'red' }}>
            <View style={{ width: 100, height: 50 }}>
              {this.numButtonsGeneration2()}
            </View>
          </View>

          <View style={{ flex: 1, margin: 10, alignItems: 'flex-end', backgroundColor: 'blue' }}>
            <View style={{ width: 100, height: 50 }}>
              {this.numButtonsGeneration3()}
            </View>
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
    flexDirection: 'column',
  },

});
