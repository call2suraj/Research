import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Animated, Easing, View, Alert, Button, Text, TouchableOpacity, Linking } from 'react-native';

import ScalingButton from './ScalingButton';
import DisplayAnImage from './ImageAnimation';
import { Props } from './index';

const Buttons: React.FC<Props> = (props: Props) => {
    const [translation, setTranslation] = useState(0);

    const translationTwo = useRef(
        new Animated.Value(0)
    ).current;

    const translationThree = useRef(
        new Animated.Value(0)
    ).current;

    const translationFour = useRef(
        new Animated.Value(0)
    ).current;

    const translationFive = useRef(
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
            toValue: 40,
            // delay: 900,
            useNativeDriver: true,
        }).start();
    }, []);

    useEffect(() => {
        Animated.spring(translationFive, {
            toValue: 40,
            delay: 900,
            useNativeDriver: true,
        }).start();
    }, []);



    useEffect(() => {
        for (let i = 0; i < 40; i++) {
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
            toValue: 40,
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

            <View>
                <View style={styles.header}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{'Moving Button in one line'}</Text>
                </View>
                <View
                    style={{
                        width: 150,
                        height: 40,
                        marginBottom: 1,
                        marginTop: 1,
                        paddingTop: 5,
                        backgroundColor: '#2196f3',

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
            </View>


            <View>
                <View style={styles.header}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{'Delayed Moving Button in one line'}</Text>
                </View>
                <Animated.View
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: 'orange',
                        transform: [{ translateX: translationThree }],
                    }}
                />
            </View>


            <View>
                <View style={styles.header}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{'Bouncing Button'}</Text>
                </View>
                <Animated.View
                    style={{
                        width: 150,
                        height: 40,
                        paddingTop: 3,
                        backgroundColor: '#2196f3',
                        transform: [{ translateY: translationTwo }],
                    }}
                >
                    <Button
                        title="Bouncing Button"
                        accessible={true}
                        accessibilityLabel="Go back"
                        accessibilityHint="Hint button type"
                        accessibilityRole="button"
                        onPress={() => Alert.alert('pressed')}
                    />
                </Animated.View>
            </View>


            <View style={{ height: 130, marginTop: 50, marginBottom: 5, }}>
                <View style={styles.header}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{'Spring Button'}</Text>
                </View>
                <Animated.View
                    style={{
                        backgroundColor: '#2196f3',
                        paddingTop: 5,
                        width: 150,
                        height: 40,
                        transform: [{ translateY: translationFive }],
                    }}
                >
                    <Button
                        title="Spring Button"
                        accessible={true}
                        accessibilityLabel="Go back"
                        accessibilityHint="Hint button type"
                        accessibilityRole="button"
                        onPress={() => Alert.alert('pressed')}
                    />
                </Animated.View>
            </View>

            <View>
                <View style={styles.header}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{'Scaling Button..'}</Text>
                </View>
                <Animated.View
                    style={{
                        marginLeft: 50,
                        width: 200,
                        height: 120,
                        transform: [{ translateY: translationFour }],
                    }}
                >
                    <ScalingButton
                        label="Scaling Button"
                        onPress={() => press()}
                        labelText={'Scaling Button'}
                        callBack={() => press()}
                        toValue={1}
                        delay={300}
                        styles={{ button: styles.animated_button, label: styles.button_label }} />
                </Animated.View>
            </View>

            {/* <DisplayAnImage /> */}

            <View>
                <View style={styles.nested_header}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{'Nested Text'}</Text>
                </View>
                <Animated.View>
                    <Text style={{ marginLeft: 50 }}>Some text<View>
                        <View style={{ flexDirection: 'row', paddingTop: 1, backgroundColor:'white' }}>
                            <TouchableOpacity
                                accessible={true}
                                accessibilityLabel="Text Button Example, Click Me!"
                                accessibilityHint="Hint Double Tab"
                                accessibilityRole="link"
                                onPress={() => Linking.openURL('https://google.com')}
                            >
                                <Animated.View style={{ 
                                    flex: 1, flexDirection: 'row', 
                                   // paddingBottom: 15 ,
                                    transform: [{ translateY: textTranslation }],
                                    }}>
                                    <Text style={{ color: 'blue' }}>{' Nested Text.'}</Text>
                                    <Text style={{ height: 25, color: 'blue' }}
                                    >Click Me!</Text>
                                </Animated.View>
                            </TouchableOpacity>
                        </View>
                    </View></Text>
                </Animated.View>
            </View>

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
        backgroundColor: 'white'
    },
    button_label: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    header: {
        backgroundColor: '#0c570a', height: 30, marginTop: 3, marginBottom: 5
    },
    nested_header: {
        //backgroundColor: '#1abc9c', 
        backgroundColor: '#0c570a',
        height: 30,
        marginBottom: 5,
    }
});

export default Buttons;
