import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RandNumDisplayer from './RandNumDisplayer';

export default class RandomNumberGen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        // with es6 classes, React does not autobind functions inside components in this whole class. So you have to manually bind 'this' so that you can call equationGenerator method/function anywhere.
        this.equationGenerator = this.equationGenerator.bind(this);
    }

    equationGenerator () {
        let first, operator = ['+', '-', '*', '/'], second;

        first = Math.floor(Math.random()* 100);
        let randOperator = operator[Math.floor(Math.random() * operator.length)]
        second = Math.floor(Math.random()* 100);

        // each case should use a component to display the equations on to the screen
        switch ( randOperator ) {
            case '+':
                <RandNumDisplayer />
            break;
            default:
                <Text>Hello</Text>
        }

    }

    render() {
        return (
            <View style = {styles.container}>
                {/* area where the random numbers will be generated */}
                <View>

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