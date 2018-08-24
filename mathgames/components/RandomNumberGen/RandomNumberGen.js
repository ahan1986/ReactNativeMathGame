import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RandNumDisplayer from './RandNumDisplayer';

export default class RandomNumberGen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberGen: props.numberGenerated1,
            pressed: props.buttonPressed1
        }

        // with es6 classes, React does not autobind functions inside components in this whole class. So you have to manually bind 'this' so that you can call equationGenerator method/function anywhere.
        this.equationGenerator = this.equationGenerator.bind(this);
    }
    
    //create method to generate new problem equations
    restartGenerator() {
        this.equationGenerator();
    }

    equationGenerator() {
        let first, operator = ['+', '-', '*', '/'], second;
        const randOperator = operator[Math.floor(Math.random() * operator.length)];

        // each case should use the component RandNumDisplayer to display the equations on to the screen
        switch (randOperator) {
            case '+':
                first = Math.floor(Math.random() * 100);
                second = Math.floor(Math.random() * 100);

                // returning the generated number plus the operator back to the app.js
                this.state.numberGen(first, randOperator, second);

                return <RandNumDisplayer numOne={first} randOp={randOperator} numTwo={second} />
                break;

            case '-':
                first = Math.floor(Math.random() * 100);
                second = Math.floor(Math.random() * 100);

                // returning the generated number plus the operator back to the app.js
                this.state.numberGen(first, randOperator, second);

                // if/else statement to reverse 'second' number if the number is greater than the 'first'. This is so that the user doesn't need to use a negative number as an answer.
                if (first < second) {
                    return <RandNumDisplayer numOne={second} randOp={randOperator} numTwo={first} />
                } else {
                    return <RandNumDisplayer numOne={first} randOp={randOperator} numTwo={second} />
                }

                break;

            case '*':
                first = Math.floor(Math.random() * 100);
                second = Math.floor(Math.random() * 10);

                // returning the generated number plus the operator back to the app.js
                this.state.numberGen(first, randOperator, second);

                return <RandNumDisplayer numOne={first} randOp={randOperator} numTwo={second} />
                break;

            case '/':

                first = Math.floor(Math.random() * 100);
                second = Math.floor(Math.random() * 10);

                //creating while loop so that dividing 'first' and 'second' will produce a whole number. So here, we will add 1 to the first number until it's divisible.
                while (first % second !== 0) {
                    first++
                }

                // returning the generated number plus the operator back to the app.js
                this.state.numberGen(first, randOperator, second);

                return <RandNumDisplayer numOne={first} randOp={randOperator} numTwo={second} />
                break;

            default:
                <Text>Andrew A. Han, Baby!</Text>
        }

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