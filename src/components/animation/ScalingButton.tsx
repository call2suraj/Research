import React, { useEffect, useRef } from 'react';
import { Props } from './index';
import {
    StyleSheet,
    Text,
    Animated,
    Easing,
    TouchableWithoutFeedback,
    View,
    Button,
    Pressable
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
                        style={{backgroundColor:'#c20000', width: 200, height: 50,alignItems:'center', justifyContent:'center'}}
                    >
                     <Text style={{fontSize: 18, color:'white', textAlign:'center'}}>{props.labelText || ''}</Text>
                     </Pressable>
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