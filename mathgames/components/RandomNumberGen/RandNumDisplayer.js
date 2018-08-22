import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const RandNumDisplayer = props => {

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', margin: 110, borderColor: 'white', borderWidth: 2, justifyContent: 'space-between', alignItems: 'center', height: 100, width: 200 }}>
                <Text style={{ fontSize: 50 }}>{props.numOne}</Text>
                <Text style={{ fontSize: 50 }}>{props.randOp}</Text>
                <Text style={{ fontSize: 50 }}>{props.numTwo}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})

export default RandNumDisplayer;