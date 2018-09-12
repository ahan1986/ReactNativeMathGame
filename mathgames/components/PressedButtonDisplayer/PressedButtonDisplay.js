import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class PressedButtonDisplay extends React.Component {
    constructor(props) {
        super(props);
        
    }

    methodToCheck() {
        console.log(this.state.typed);
    }

    render() {
        return (
            <View style={styles.container}>
                {/* area where user input will be displayed */}
                <View style={{ flex: 1, backgroundColor: 'brown', justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ fontSize: 40 }} > {this.props.typed} </Text>
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