import React, { useState, useEffect, useRef } from 'react';
import { Animated, Easing, View, Alert, Text, TouchableOpacity, Linking, Pressable  } from 'react-native';

import ScalingButton from './ScalingButton';

import styles from '../../styles/Buttons.style';
import { Props } from './index';

const Buttons: React.FC<Props> = (props: Props) => {
    const [translation, setTranslation] = useState(0);

    const translationThree = useRef(
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
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                setTranslation(i);
            }, 70 * i);
        }
    }, []);

    useEffect(() => {
        Animated.timing(textTranslation, {
            toValue: 10,
            easing: Easing.bounce,
            duration: 1900,
            delay: 900,
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

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>{'Moving Button in one line'}</Text>
                </View>
                <View
                    style={{
                        width: 180,
                        marginBottom: 5,
                        backgroundColor: '#c20000',
                        marginTop:35,
                        transform: [{ translateX: translation }],
                    }}
                >
                    <Pressable
                        accessible={true}
                        accessibilityLabel="Go back"
                        accessibilityHint="Hint button type"
                        accessibilityRole="button"
                        onPress={() => Alert.alert('pressed')}
                    >
                        <Text style={styles.animated_button}>{'Animated Button'}</Text>
                    </Pressable>
                </View>
            </View>

            <View style={{ backgroundColor:'#f2f2f2'}}>
                <View style={styles.header}>
                    <Text>{'Delayed Moving Button in one line'}</Text>
                </View>
                <Animated.View
                    style={{
                        marginTop: 25,
                        width: 100,
                        height: 100,
                        backgroundColor: '#c20000',
                        transform: [{ translateX: translationThree }],
                    }}
                />
            </View>

            <View style={{marginTop: 15, marginBottom: 28}}>
                <View style={styles.nested_header}>
                    <Text>{'Nested Text'}</Text>
                </View>
                <Animated.View style={{marginTop: 25}}>
                    <Text style={{ marginLeft: 50 }}>Some text<View>
                        <View style={styles.text_view}>
                            <TouchableOpacity
                                accessible={true}
                                accessibilityLabel="Text Button Example, Click Me!"
                                accessibilityHint="Hint Double Tab"
                                accessibilityRole="link"
                                onPress={() => Linking.openURL('https://google.com')}
                            >
                                <Animated.View style={{ 
                                    flex: 1, flexDirection: 'row', 
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

export default Buttons;
