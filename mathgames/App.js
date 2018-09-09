import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Game from './components/game';
import Home from './components/home';

export default class App extends React.Component {
  state = {
    homepage: 'home'
  }

  pageChanger = () => {
    this.state.homepage = 'Game';
    this.setState({
      homepage: this.state.homepage
    });
  }

  currentPage = (event) => {
    if(this.state.homepage == 'home') {
      return <Home pageChanger={this.pageChanger} />
    } else if(this.state.homepage == 'Game') {
      return <Game />
    }
  }

  render() {
    return (
      <View style={{flex: 1}} >
        {this.currentPage(this.state.homepage)}
      </View>
    )
  }
};
