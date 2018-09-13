import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RandNumDisplayer = props => {

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 50, marginHorizontal: '5%' }}>{props.numOne}</Text>
                <Text style={{ fontSize: 50, marginHorizontal: '5%' }}>{props.randOp}</Text>
                <Text style={{ fontSize: 50, marginHorizontal: '5%' }}>{props.numTwo}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default RandNumDisplayer;