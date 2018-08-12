import React from 'react';
import { Button, View } from 'react-native';


const NumButtons = props => {
    

    return (
        <View style={{height: 100, width: 100, backgroundColor: 'purple'}}>
            <Button onPress={() => props.buttonPressed(props.num)} title={props.num}/>
        </View>
    )
}

export default NumButtons;