import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class PressedButtonDisplay extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.typed)

        this.state = {
            typedToDisplay: props.typed
        }
    }

    methodToCheck() {
        console.log(this.state.typed);
    }

    render() {
        return (
            <View style={styles.container}>
                {/* area where user input will be displayed */}
                <View style={{ flex: 1, backgroundColor: 'brown' }} >
                    <Text> {this.state.typedToDisplay} </Text>
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