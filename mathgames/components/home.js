import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.startTheGame.bind(this);
    }

    startTheGame = () => {
        this.props.pageChanger()
    }

    render() {
        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <TouchableOpacity
                    style={[styles.container]}
                    activeOpacity={0.7}
                    onPress={this.startTheGame} 
                >
                    <Text>Start</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'column',
        height: 100,
        width: 100,
        backgroundColor: '#4BC05F',
    }
})