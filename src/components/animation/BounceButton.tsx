import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Alert, Text, Pressable } from 'react-native';

import { Props } from './index';
import styles from '../../styles/BounceButton.style';

const BounceButton: React.FC<Props> = (props: Props) => {
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
            <Pressable // you can use Pressable aswell
                accessible={true}
                accessibilityLabel="Go back"
                accessibilityHint="Hint button type"
                accessibilityRole="button"
                onPress={() => Alert.alert('pressed')}
                style={styles.button_style}
            >
                 <Text style={styles.button_text}>{props.labelText || ''}</Text>
            </Pressable>
        </Animated.View>
    );
}

export default BounceButton;
