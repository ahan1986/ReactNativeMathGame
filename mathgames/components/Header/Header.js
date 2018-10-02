import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import moment from 'moment';

export default class Header extends React.Component {



    render() {

        // subtracting the current time with the time the setInterval activiates
        let measuringTime = this.props.timer - this.props.start;
        // this will add a '0' so that it will look like a normal stopwatch
        const pad = (num) => num < 10 ? '0' + num : num;
        // use moment.js to translate the timer to a modern format
        const duration = moment.duration(measuringTime);

        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, width: '80%', paddingLeft: '35%' }}>
                <Text style={{ width: '100%' }}>
                    {pad(duration.minutes() % 60)}:{pad(duration.seconds())}:{pad(duration.milliseconds() % 100)}
                </Text>

                <Text style={{ width: '50%' }}>
                    {this.props.question} / 20
                </Text>
            </View>
        )
    }
};
