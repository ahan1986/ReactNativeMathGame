import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import ButtonsDisplayer from './NumButtons/ButtonsDisplayer';
import PressedButtonDisplay from './PressedButtonDisplayer/PressedButtonDisplay';
import { Font } from 'expo';
import moment from "moment";
// import RandNumDisplayer from './RandomNumberGen/RandNumDisplayer';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typedNumber: [],
            question: 0,
            timer: 0,
            start: 0,
            firstNum: "",
            operator: "",
            secondNum: "",    
        }

        // if you're using fat arrow syntax, you do not need this bind(this)
        this.buttonPressedApp = this.buttonPressedApp.bind(this);
        this.equationGenerator = this.equationGenerator.bind(this);

    }

    componentDidMount() {
        this.equationGenerator();
        this.timerMethod();

        // loading expo fonts that I downloaded from google font
        Font.loadAsync({
            'GamjaFlower': require('../assets/fonts/GamjaFlower-Regular.ttf')

        }).then(() => {
            this.setState({
                isFontLoaded: true,
            });
        })
    }

    componentWillUnmount() {
        console.log("unmounting ");
    }

    //create a method that will start the timer
    timerMethod = () => {
        //grab the time
        const timer = new Date().getTime();

        this.setState({
            timer,
            start: timer,
        })

        // every interval, grab a new time every interval. with this we will subtract it with the const timer to get the stopwatch going.
        this.timer = setInterval(() => {
            this.setState({
                timer: new Date().getTime(),
            });
        }, 1);

    }

    // do all the calculations here and if the user gets the answer correct, reload the equationGenerator()
    buttonPressedApp = (event) => {

        if (event != 'DEL') {
            const numToChange = this.state.typedNumber = [...this.state.typedNumber, event].join('');
            this.setState({
                typedNumber: numToChange
            });
            // use eval function to solve the random generated numbers.  eval will help me convert the stringed operator to become a math operator along with all the other stringed numbers
            const answer = eval(this.state.firstNum + this.state.operator + this.state.secondNum);

            // if statement to check if the user pressed the right answer. if so, a new equation will be generated
            if (answer == this.state.typedNumber) {
                //Using setTimeout because without it the app doesn't display the final number typed, instead it goes to the next question.
                setTimeout(() => {
                    const addOneToScore = this.state.question + 1;

                    this.setState({
                        typedNumber: [],
                        question: addOneToScore
                    })
                    console.log(addOneToScore);
                    this.equationGenerator();
                }, 20);
            } else if (this.state.question == 51) {
                const { timer, start } = this.state;
                
            }

        } else {

            //if "DEL" is clicked, remove the last number

            if (this.state.typedNumber.length != 0) {

                const deleteOne = this.state.typedNumber.slice(0, this.state.typedNumber.length - 1);

                this.setState({
                    typedNumber: deleteOne
                })

            }
        }
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
                // this.state.numberGen(first, randOperator, second);
                this.setState({
                    firstNum: first,
                    operator: randOperator,
                    secondNum: second
                });

                break;

            case '-':
                first = Math.floor(Math.random() * 100);
                second = Math.floor(Math.random() * 100);

                // returning the generated number plus the operator back to the app.js
                // this.state.numberGen(first, randOperator, second);
                this.setState({
                    firstNum: first,
                    operator: randOperator,
                    secondNum: second
                });
                // if/else statement to reverse 'second' number if the number is greater than the 'first'. This is so that the user doesn't need to use a negative number as an answer.
                if (first < second) {
                    this.setState({
                        firstNum: second,
                        operator: randOperator,
                        secondNum: first
                    });

                } else {

                    this.setState({
                        firstNum: first,
                        operator: randOperator,
                        secondNum: second
                    });

                }

                break;

            case '*':
                first = Math.floor(Math.random() * 100);
                second = Math.floor(Math.random() * 10);

                // returning the generated number plus the operator back to the app.js
                // this.state.numberGen(first, randOperator, second);
                this.setState({
                    firstNum: first,
                    operator: randOperator,
                    secondNum: second
                });

                break;

            case '/':

                first = Math.floor(Math.random() * 100);
                second = Math.floor(Math.random() * 10);

                //creating while loop so that dividing 'first' and 'second' will produce a whole number. So here, we will add 1 to the first number until it's divisible.
                while (first % second !== 0) {
                    first++
                }

                // returning the generated number plus the operator back to the app.js
                // this.state.numberGen(first, randOperator, second);
                this.setState({
                    firstNum: first,
                    operator: randOperator,
                    secondNum: second
                });

                break;

            default:
                <Text>Andrew A. Han, Baby!</Text>
        }

    }

    // this method will show the buttons the user has pressed
    randNumDisplayer = () => {

        const { isFontLoaded } = this.state;

        return (
            <View style={styles.RandNumDisplayer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={isFontLoaded && { fontSize: 50, marginHorizontal: '5%', fontFamily: 'GamjaFlower' }}>{this.state.firstNum}</Text>
                    <Text style={isFontLoaded && { fontSize: 50, marginHorizontal: '5%', fontFamily: 'GamjaFlower' }}>{this.state.operator}</Text>
                    <Text style={isFontLoaded && { fontSize: 50, marginHorizontal: '5%', fontFamily: 'GamjaFlower' }}>{this.state.secondNum}</Text>
                </View>
            </View>
        )
    }

    header = () => {
        // subtracting the current time with the time the setInterval activiates
        let measuringTime = this.state.timer - this.state.start;
        // this will add a '0' so that it will look like a normal stopwatch
        const pad = (n) => n < 10 ? '0' + n : n;
        // use moment.js to translate the timer to a modern format
        const duration = moment.duration(measuringTime);

    setTimeout(this.endingOfTheGame, 3000);

        return (

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, width: '80%', paddingLeft: '35%' }}>
                <Text style={{ width: '100%' }}>
                    {pad(duration.minutes() % 60)}:{pad(duration.seconds())}:{pad(duration.milliseconds() % 100)}
                </Text>

                <Text style={{ width: '50%' }}>
                    {this.state.question} / 50
                </Text>
            </View>
        )
    }

    endingOfTheGame = () => {
        clearInterval(this.timer);
        console.log("hello ");
    }

    render() {
        //converting the seconds into a format with minutes and seconds using the date object in the JS library
        // const date = new Date(null);

        // date.setSeconds(this.state.timer);
        // toISOString() will use ISO standard for the time and substr() method will cut out the unnecary stuff from the format and display the one you want. 
        // const timeString = date.toISOString().substr(11, 8);

        //  ** had all the stuff in the header() here before the return, however; it kept stopping the timer and freezing everything.  I believe it has to do with the unmounting that occurs and the setInterval that keeps moving.  Moving everything to header seems to fix the freezing problem.

        return (
            <View style={styles.container}>

                {this.header()}

                {this.randNumDisplayer()}

                <PressedButtonDisplay typed={this.state.typedNumber} />

                <ButtonsDisplayer buttonPressed1={this.buttonPressedApp} />

            </View>
        );
    }
};

// ================================================ STYLES  ================================================================
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    RandNumDisplayer: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
