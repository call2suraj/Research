import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Animated, Easing, View, Alert, Text, Pressable } from 'react-native';
import styles from '../../styles/BounceContainer.style';
import { Props } from './index';

const BounceContainer: React.FC<Props> = (props: Props) => {
    //const [translation, setTranslation] = useState(0);

    const translationTwo = useRef(
        new Animated.Value(0)
    ).current;

    useEffect(() => {
        Animated.timing(translationTwo, {
            toValue: props.toValue,
            easing: Easing.bounce,
            duration: props.duration,
            delay: props.delay,
            useNativeDriver: true,
        }).start();
    }, []);


    const onPress = () => {
        //do anything you want
    }

    return (
        <Animated.View
            style={{
                paddingTop: 3,
                margin: 16,
                transform: [{ translateY: translationTwo }],
            }}
        >
            <View style={styles.container}>
            {props.containerItem}
            </View>
        </Animated.View>
    );
}

export default BounceContainer;
