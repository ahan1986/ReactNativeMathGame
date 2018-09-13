import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Font } from 'expo';

export default class PressedButtonDisplay extends React.Component {
    constructor(props) {
        super(props);
        
        // to use font's from google that is saved into assets/fonts file
        this.state = {
            isFontLoaded: false,
        }
    }

    //componentDidMount to set up the fonts after the rendering. Make sure to require the folder from where this folder and not app.js!!!
    componentDidMount() {
        Font.loadAsync({
          'GamjaFlower': require('../../assets/fonts/GamjaFlower-Regular.ttf')
          
        }).then(() => {
          this.setState({
            isFontLoaded: true,
          });
        })
      }

    methodToCheck() {
        console.log(this.state.typed);
    }

    render() {
        const { isFontLoaded } = this.state;
        return (
            <View style={styles.container}>
                {/* area where user input will be displayed */}
                <View style={{ flex: 1, backgroundColor: 'brown', justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={isFontLoaded && { fontSize: 50, fontFamily: 'GamjaFlower', fontWeight: 'bold'}} > {this.props.typed} </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})