import React from 'react';
import { Button, View, TouchableHighlight, Text, StyleSheet } from 'react-native';

// a.k.a function NumButtons(props) { };

const NumButtons = props => {

    return (
        <View>
            <TouchableHighlight style={{ height: 100, width: 100, borderColor: 'black', justifyContent:'center', alignItems: 'center' }} onPress={() => props.buttonPressed(props.num)} >
                {/* <Button onPress={() => props.buttonPressed(props.num)} title={props.num}/> */}
                <Text style={styles.textButton}>{props.num}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({ 
    textButton: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    }
})

export default NumButtons;