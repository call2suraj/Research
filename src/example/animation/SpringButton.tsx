import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated, Easing, View, Button } from 'react-native';
import { Props } from './index';

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
        <View>
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
                        title={props.labelText}
                        accessible={true}
                        accessibilityLabel="Go back"
                        accessibilityHint="Hint button type"
                        accessibilityRole="button"
                        onPress={()=>props.callBack()}
                    />
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
    header:{
        backgroundColor: '#0c570a', height: 30, marginTop: 3, marginBottom: 5
    },
});

export {SpringButton};
