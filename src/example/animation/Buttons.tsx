import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Animated, Easing, View, Alert, Button, Text, TouchableOpacity, Linking } from 'react-native';

import ScalingButton from './ScalingButton';
import DisplayAnImage from './ImageAnimation';
import { Props } from './index';

const Buttons: React.FC<Props> = (props: Props) => {
    const [translation, setTranslation] = useState(0);
    //const [textTranslation, setTextTranslation] = useState(0);

    const translationTwo = useRef(
        new Animated.Value(0)
    ).current;

    const translationThree = useRef(
        new Animated.Value(0)
    ).current;

    const translationFour = useRef(
        new Animated.Value(0)
    ).current;

    const textTranslation = useRef(
        new Animated.Value(0)
    ).current;

    useEffect(() => {
        Animated.timing(translationThree, {
            toValue: 100,
            delay: 900,
            useNativeDriver: true,
        }).start();
    }, []);

    useEffect(() => {
        Animated.spring(translationFour, {
            toValue: 250,
            // delay: 900,
            useNativeDriver: true,
        }).start();
    }, []);

    useEffect(() => {
        for (let i = 0; i < 150; i++) {
            setTimeout(() => {
                setTranslation(i);
            }, 70 * i);
        }
    }, []);

    // useEffect(() => {
    //     for (let i = 10; i < 10; i++) {
    //         setTimeout(() => {
    //             setTextTranslation(i);
    //         }, 5 * i);
    //     }
    // }, []);

    useEffect(() => {
        Animated.timing(textTranslation, {
            toValue: 10,
            easing: Easing.bounce,
            duration: 1900,
            delay: 900,
            useNativeDriver: true,
        }).start();
    }, []);

    useEffect(() => {
        Animated.timing(translationTwo, {
            toValue: 150,
            easing: Easing.bounce,
            duration: 1900,
            delay: 1900,
            useNativeDriver: true,
        }).start();
    }, []);


    const press = () => {
        //do anything you want
    }


    const renderBoxes = (start) => {
        var selected_animations = animations.slice(start, start + 3);
        return selected_animations.map((animation, index) => {
            return (

                <ScalingButton
                    key={index}
                    onPress={this.stopAnimation.bind(this, animation[0])}
                    noDefaultStyles={true}
                >
                    <Animatable.View
                        ref={animation[0]}
                        style={[styles.box, { backgroundColor: animation[1] }]}
                        animation={animation[0]}
                        iterationCount={"infinite"}>
                        <Text style={styles.box_text}>{animation[0]}</Text>
                    </Animatable.View>
                </ScalingButton>

            );
        });
    }

    return (
        <View>
            <View
                style={{
                    width: 150,
                    height: 50,
                    marginBottom: 10,
                    marginTop: 10,
                    paddingTop: 5,
                    backgroundColor: 'orange',
                    transform: [{ translateX: translation }],
                }}
            >
                <Button
                    title="Animated Button"
                    accessible={true}
                    accessibilityLabel="Go back"
                    accessibilityHint="Hint button type"
                    accessibilityRole="button"
                    onPress={() => Alert.alert('pressed')}
                />
            </View>

            <View>
                <Animated.View
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: 'orange',
                        transform: [{ translateX: translationThree }],
                    }}
                />
            </View>

            <Animated.View
                style={{
                    width: 150,
                    height: 50,
                    paddingTop: 5,
                    backgroundColor: '#2196f3',
                    transform: [{ translateY: translationTwo }],
                }}
            >
                <Button color={"white"}
                    title="Bouncing Button"
                    accessible={true}
                    accessibilityLabel="Go back"
                    accessibilityHint="Hint button type"
                    accessibilityRole="button"
                    onPress={() => Alert.alert('pressed')}
                />
            </Animated.View>

            <Animated.View
                style={{
                    marginTop: 80,
                    backgroundColor: '#2196f3',
                    paddingTop: 5,
                    width: 150,
                    height: 50,
                    transform: [{ translateY: translationFour }],
                }}
            >
                <Button color={"white"}
                    title="Spring Button"
                    accessible={true}
                    accessibilityLabel="Go back"
                    accessibilityHint="Hint button type"
                    accessibilityRole="button"
                    onPress={() => Alert.alert('pressed')}
                />
            </Animated.View>

            <Animated.View
                style={{
                    margin: 50,
                    width: 300,
                    height: 150,
                    transform: [{ translateY: translationFour }],
                }}
            >
                <ScalingButton
                    label="Scaling Button"
                    onPress={() => press()}
                    styles={{ button: styles.animated_button, label: styles.button_label }} />
            </Animated.View>

            {/* <DisplayAnImage /> */}

            <Animated.View>
                <Text style={{ marginLeft: 50 }}>Some text<Animated.View style={{
                    width: 145,
                    height: 20,
                    paddingTop: 5,
                    transform: [{ translateX: textTranslation }],
                }}>
                    <View style={{ flexDirection: 'row', height: 50, paddingTop: 0 }}>
                        <TouchableOpacity
                            accessible={true}
                            accessibilityLabel="Text Button Example, Click Me!"
                            accessibilityHint="Hint Double Tab"
                            accessibilityRole="link"
                            onPress={() => Linking.openURL('https://google.com')}
                        >
                            <View style={{ flex: 1, flexDirection: 'row', paddingBottom: 15 }}>
                                <Text style={{ color: 'blue' }}>{'Nested Text.'}</Text>
                                <Text style={{ height: 20, color: 'blue' }}
                                >Click Me!</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Animated.View></Text>
            </Animated.View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 30
    },
    ordinary_button: {
        backgroundColor: '#ff5722',
    },
    animated_button: {
        backgroundColor: '#ff5722'
    },
    button_label: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Buttons;
