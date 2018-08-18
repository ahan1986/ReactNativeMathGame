import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class PressedButtonDisplay extends React.Component {
    state = {
        typedNumber: []
    }
    render() {
        return (
            <View style={styles.container}>
                {/* area where user input will be displayed */}
                <View style={{ flex: 1, backgroundColor: 'brown' }} >
                    <Text> {this.state.typedNumber} </Text>
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