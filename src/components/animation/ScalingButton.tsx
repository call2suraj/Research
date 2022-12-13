import React, { useEffect, useRef } from 'react';
import { Props } from './index';
import {
    Text,
    Animated,
    Easing,
    TouchableWithoutFeedback,
    View,
    Pressable
} from 'react-native';

import styles from '../../styles/ScalingButton.style';

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
            toValue: props.toValue,
            delay: props.delay,
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
        outputRange: [1, 1.5, 1]
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
                <View style={{marginTop: 18}}>
                    <Pressable // you can use Pressable aswell
                        title={props.labelText || ''}
                        accessible={true}
                        accessibilityLabel="Go back"
                        accessibilityHint="Hint button type"
                        accessibilityRole="button"
                        onPress={()=>props.callBack()}
                        style={styles.button_style}
                    >
                     <Text style={styles.text_style}>{props.labelText || ''}</Text>
                     </Pressable>
                </View>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}

export default ScalingButton;