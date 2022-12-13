import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated, View, Pressable, Text } from 'react-native';
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
                        //title={props.labelText}
                        accessible={true}
                        accessibilityLabel="Go back"
                        accessibilityHint="Hint button type"
                        accessibilityRole="button"
                        onPress={()=>props.callBack()}
                    >
                        <Text style={{fontSize: 18, color:'white', textAlign:'center'}}>{props.labelText || ''}</Text>
                    </Pressable>
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
