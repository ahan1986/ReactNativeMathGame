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

        return (
            <View style={styles.container}>
                <Text>Ending of the Game Page!!! {duration.seconds()} </Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
