import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const RandNumDisplayer = props => {

    return (
        <View style = {styles.container}>
            <Text style = {{ fontSize: 50 }}>{props.numOne}</Text>
            <Text style = {{ fontSize: 50 }}>{props.randOp}</Text>
            <Text style = {{ fontSize: 50 }}>{props.numTwo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default RandNumDisplayer;