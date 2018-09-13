import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import NumButtons from './NumButtons';

export default class ButtonsDisplayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonP: props.buttonPressed1
    }
  }

    buttonPressed = (event) => {
      //this will be sent back to app.js with the number that was pressed. Must use state to bring the function down to use props.
      // this.state.buttonP(event);
      this.props.buttonPressed1(event);
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
            <View style = {styles.container}>

                <View style={{ flexDirection: 'row', paddingTop: '8%' }}>

                    <View style={{paddingTop:'10%',  backgroundColor: 'yellow' }}>
                        <View style={{ }}>
                            {this.numButtonsGeneration1()}
                        </View>
                    </View>

                    <View style={{paddingTop:'10%',  backgroundColor: 'red' }}>
                        <View style={{  }}>
                            {this.numButtonsGeneration2()}
                        </View>
                    </View>

                    <View style={{paddingTop:'10%',  backgroundColor: 'blue' }}>
                        <View style={{ }}>
                            {this.numButtonsGeneration3()}
                        </View>
                    </View>

                </View>

            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
      flex: 5,
      backgroundColor: '#fff',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '25%'
    }
  
  });