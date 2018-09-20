import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Animated } from 'react-native';

export default class CountDown extends React.Component {
    state = {
        countDownBadge: new Animated.Value(1),
        countDownCadence: ['Ready', 'Set', 'GO!'],
        countDown: '',
    };

    componentDidMount() {
        // this.animatedBadge();
        this.countDownMethod();
    };

    animatedBadge = () => {
        
        Animated.timing(this.state.countDownBadge, {
            toValue: 0,
            duration: 2000
        }).start();
    };

    countDownMethod = () => {
        
        for (let i = 0; i < this.state.countDownCadence.length; i++) {

            this.state.countDownBadge.setValue(1);

            this.setState({
                countDown: this.state.countDownCadence[i]
            })

            this.animatedBadge();
            console.log(this.state.countDownCadence[i])
        }

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
                        hello {this.state.countDown} hello
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
        fontSize: 15,
    },
    animatedCountDown: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%',
        width: '50%',
        borderRadius: 50,
        backgroundColor:'red',
    }
})