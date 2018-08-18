import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonsDisplayer from './components/NumButtons/ButtonsDisplayer';

export default class App extends React.Component {
  


  render() {
    return (
      <View style={styles.container}>

        <ButtonsDisplayer />

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
