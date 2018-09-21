import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import moment from 'moment';

export default class Ending extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        // using moment.js to convert to modern time-formats
        const duration = moment.duration(this.props.endingTime);
        const pad = (num) => num < 10 ? "0" + num : num;

        return (
            <View style={styles.container}>
                <Text style={{  }} >Your time is {pad(duration.minutes())}:{pad(duration.seconds())}:{pad(Math.floor(duration.milliseconds() / 10))} </Text>
                <TouchableOpacity
                    onPress={this.props.playAgain}
                    style={styles.button}
                    activeOpacity={0.7}
                >
                    <Text style={styles.textFont}>Play Again?</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor:'red',
    },
    textFont: {
        fontSize: 15,
    }
});
