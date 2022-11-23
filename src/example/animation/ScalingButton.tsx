import React, { useEffect, useRef } from 'react';
import { Props } from './index';
import {
    StyleSheet,
    Text,
    Animated,
    Easing,
    TouchableWithoutFeedback,
    View,
    Button
} from 'react-native';

const ScalingButton: React.FC<Props> = (props: Props) => {
    const scaleValue = useRef(
        new Animated.Value(0)
    ).current;

    const scale = () => {
        scaleValue.setValue(0);
        Animated.timing(
            scaleValue,
            {
                toValue: 1,
                duration: 250,
                easing: Easing.easeOutBack,
                useNativeDriver: false
            }
        ).start();
    }

    useEffect(() => {
        Animated.timing(scaleValue, {
            toValue: 1,
            delay: 300,
            easing: Easing.easeOutBack,
            useNativeDriver: true,
        }).start();
    }, []);

    function onPress() {
        scale();
        props.onPress();
    }

    function getContent() {
        if (props.children) {
            return props.children;
        }
        return <Text style={styles.default_button}>{props.label}</Text>;
    }

    const buttonScale = scaleValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.1, 1]
    });

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Animated.View style={[

                props.styles ? props.styles.button : '',
                {
                    transform: [
                        { scale: buttonScale }
                    ]
                }
            ]}
            >
                <View>
                    <Button
                        title="Scalling Button"
                        accessible={true}
                        accessibilityLabel="Go back"
                        accessibilityHint="Hint button type"
                        accessibilityRole="button"
                        onPress={() => Alert.alert('pressed')}
                    />
                </View>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    default_button: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderWidth: 1,
        borderColor: '#eee',
        margin: 20
    },
});

export default ScalingButton;