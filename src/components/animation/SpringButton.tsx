import React, { useEffect, useRef } from 'react';
import { Animated, View, Pressable, Text } from 'react-native';
import { Props } from './index';
import styles from '../../styles/SpringButton.style';

const SpringButton: React.FC<Props> = (props: Props) => {
    const translationFive = useRef(
        new Animated.Value(0)
    ).current;

    useEffect(() => {
        Animated.spring(translationFive, {
            toValue: props.toValue,
            delay: props.delay,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View style={{marginLeft: 8}}>
                <Animated.View
                    style={{
                        backgroundColor: '#c20000',
                        paddingTop: 5,
                        width: 150,
                        height: 40,
                        //borderRadius:9,
                        transform: [{ translateY: translationFive }],
                    }}
                >
                    <Pressable
                        accessible={true}
                        accessibilityLabel="Go back"
                        accessibilityHint="Hint button type"
                        accessibilityRole="button"
                        onPress={()=>props.callBack()}
                    >
                        <Text style={styles.text_style}>{props.labelText || ''}</Text>
                    </Pressable>
                </Animated.View>
        </View>
    );
}

export {SpringButton};
