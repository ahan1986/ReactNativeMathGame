import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class RandomNumberGen extends React.Component {

    render() {
        return (
            <View style = {styles.container}>
                {/* area where the random numbers will be generated */}
                <View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'orange'
    }
})