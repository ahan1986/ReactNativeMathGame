import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RandNumDisplayer from './RandNumDisplayer';

export default class RandomNumberGen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberGen: props.numberGenerated1
        }

        // with es6 classes, React does not autobind functions inside components in this whole class. So you have to manually bind 'this' so that you can call equationGenerator method/function anywhere.
        this.equationGenerator = this.equationGenerator.bind(this);
 
    }

    render() {
        return (
            <View style={styles.container}>
                {/* area where the random numbers will be generated */}
                <View>
                    {this.equationGenerator()}
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