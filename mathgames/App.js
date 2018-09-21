import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Game from './components/game';
import Home from './components/home';
import Ending from './components/ending';
import CountDown from './components/countDown';


export default class App extends React.Component {
  state = {
    endingTimer: 0,
    homepage: 'Home'
  }

  gamePage = () => {
    this.setState({
      homepage: 'Game'
    });
  }

  countDownPage = (RSG) => {

    this.setState({
      homepage: 'countDown'
    })
  }

  currentPage = (event) => {
    if(this.state.homepage == 'Home') {
      return <Home pageChanger={this.countDownPage} />
    } else if(this.state.homepage == 'Game') {
      return <Game finished50Questions={this.endingPage} />
    } else if(this.state.homepage == 'Ending') {
      return <Ending playAgain={this.countDownPage} endingTime={this.state.endingTimer} />
    } else {
      return <CountDown countDownPage = {this.gamePage} />
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
