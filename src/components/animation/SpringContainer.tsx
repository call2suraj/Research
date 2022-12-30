import React, { useEffect, useRef } from 'react';
import { Animated, View, Pressable, Text } from 'react-native';
import { Props } from './index';

const SpringContainer: React.FC<Props> = (props: Props) => {
    const translation = useRef(
        new Animated.Value(0)
    ).current;

    useEffect(() => {
        Animated.spring(translation, {
            toValue: props.toValue,
            delay: props.delay,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View style={{marginLeft: 8}}>
                <Animated.View
                    style={{
                        backgroundColor: props.backgroundColor || '#c20000',
                        paddingTop: 5,
                        width: props.width || 150,
                        height: props.height || 40,
                        transform: [{ translateY: translation }],
                    }}
                >
                <View style={{ marginTop: 18 }}>
                    {props.containerItem}
                </View>
                </Animated.View>
        </View>
    );
}

export default SpringContainer;
