import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Animated, Easing, View, Alert, Button, } from 'react-native';

import { Props } from './index';

const BounceButton: React.FC<Props> = (props: Props) => {
    const [translation, setTranslation] = useState(0);

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
                width: 150,
                height: 40,
                paddingTop: 3,
                marginLeft: 8,
                backgroundColor: '#2196f3',
                transform: [{ translateY: translationTwo }],
            }}
        >
            <Button // you can use Pressable aswell
                title={props.labelText}
                accessible={true}
                accessibilityLabel="Go back"
                accessibilityHint="Hint button type"
                accessibilityRole="button"
                onPress={() => Alert.alert('pressed')}
            />
        </Animated.View>
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

export default BounceButton;
