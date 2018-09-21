import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Animated } from 'react-native';

export default class CountDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            countDownBadge: new Animated.Value(1),
            countDown: '',
        };
    };
    

    componentDidMount() {
        this.countDownMethod();
    };

    animatedBadge = (cad) => {

        this.state.countDownBadge.setValue(1);

        this.setState({
            countDown: cad
        });

        Animated.timing(this.state.countDownBadge, {
            toValue: 0,
            duration: 2000
        }).start();

    };

    countDownMethod = () => {
        const count = ['Ready', 'Set', 'GO!'];

        // starting of the countdown.
        this.animatedBadge(count[0]);
        // for the setTimeout, I had it without () => and it gave me a warning that 'undefined is not an object (evaluating func.apply).
        setTimeout(() => this.animatedBadge(count[1]), 2000);
        setTimeout(() => this.animatedBadge(count[2]), 4000);
        // using method in app.js to be called after 6 seconds so that it will go from the countdown page to the game page.
        setTimeout(() => this.props.countDownPage(), 6000);
    
    };

    render() {
        return (
            <View style={styles.container}>
                <Animated.View
                    style={[styles.animatedCountDown, {
                        transform: [
                            {
                                scale: this.state.countDownBadge
                            }
                        ]
                    }
                    ]}
                >
                    <Text style={styles.countDownButton}>
                        {this.state.countDown}
                    </Text>
                </Animated.View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    countDownButton: {
        fontSize: 45,
    },
    animatedCountDown: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%',
        width: '50%',
        borderRadius: 50,
        backgroundColor: 'red',
    }
})