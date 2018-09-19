import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// a.k.a function RandNumDisplayer(props) { };

// MOVED THIS TO GAME.JS SO THAT I CAN REMOVE THIS FILE

const RandNumDisplayer = props => {

    return (
        <View style={styles.RandNumDisplayer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 50, marginHorizontal: '5%' }}>{props.numOne}</Text>
                <Text style={{ fontSize: 50, marginHorizontal: '5%' }}>{props.randOp}</Text>
                <Text style={{ fontSize: 50, marginHorizontal: '5%' }}>{props.numTwo}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    RandNumDisplayer: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default RandNumDisplayer;