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

    render () {
        return (
            <View style={styles.container} >
                <Button title='Start' onPress={this.startTheGame} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})