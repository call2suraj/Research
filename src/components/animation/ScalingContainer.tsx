import React, { useEffect, useRef } from 'react';
import { Props } from './index';
import {
    Animated,
    Easing,
    TouchableWithoutFeedback,
    View
} from 'react-native';

const ScalingContainer: React.FC<Props> = (props: Props) => {
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
            toValue: props.toValue,
            delay: props.delay,
            easing: Easing.easeOutBack,
            useNativeDriver: true,
        }).start();
    }, []);

    const buttonScale = scaleValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.5, 1]
    });

    return (
        <TouchableWithoutFeedback>
            <Animated.View style={[
                props.styles ? props.styles.button : '',
                {
                    transform: [
                        { scale: buttonScale }
                    ]
                }
            ]}
            >
                <View style={{ marginTop: 18 }}>
                    {props.containerItem}
                </View>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}

export default ScalingContainer;