import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Game from './components/game';
import Home from './components/home';
import Ending from './components/ending';
import CountDown from './components/countDown';


export default class App extends React.Component {
  state = {
    endingTimer: 0,
    homepage: ''
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
      return <Game finished50Questions={this.endingPage} />
    } else if(this.state.homepage == 'Ending') {
      return <Ending playAgain={this.pageChanger} endingTime={this.state.endingTimer} />
    } else {
      return <CountDown />
    }
  }

  endingPage = (endingTime) => {
    // console.log("endingTime " + endingTime);
    this.setState({
      endingTimer: endingTime,
      homepage: 'Ending'
    });
  };

  render() {
    return (
      <View style={{flex: 1}} >
        {this.currentPage(this.state.homepage)}
      </View>
    )
  }
};
