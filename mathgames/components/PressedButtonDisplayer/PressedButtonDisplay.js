import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class PressedButtonDisplay extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                {/* area where user input will be displayed */}
                <View style={{ flex: 1, backgroundColor: 'brown' }} >
                    <Text> Hello </Text>
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