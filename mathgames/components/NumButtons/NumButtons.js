import React from 'react';
import { Button, View, TouchableHighlight } from 'react-native';

// a.k.a function NumButtons(props) { };

const NumButtons = props => {
    return (
        <TouchableHighlight style={{height: 100, width: 100}} onPress={() => props.buttonPressed(props.num)} >
            {/* <Button onPress={() => props.buttonPressed(props.num)} title={props.num}/> */}
                <View>{props.num}</View>
        </TouchableHighlight>
    )
}

export default NumButtons;