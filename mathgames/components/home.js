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
            <TouchableOpacity
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                activeOpacity={0.7}
            >
                <View style={[styles.container]} >
                    <Button title='Start' onPress={this.startTheGame} />
                </View>
            </TouchableOpacity>
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