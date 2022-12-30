import React from 'react';
import { View, Alert, Text, Pressable } from 'react-native';
import BounceContainer from '../../components/animation/BounceContainer';
import styles from '../../styles/BounceExample.style';

const BounceExample: React.FC<Props> = (props: Props) => {
    const handlePress = () => {
        //do anything you want
        Alert.alert('Container button Pressed !!!')
    }

    const getButton = () => {
        return (
            <View style={{alignItems:'center'}}>
                <Pressable // you can use Pressable aswell
                    accessible={true}
                    accessibilityLabel="Go back"
                    accessibilityHint="Hint button type"
                    accessibilityRole="button"
                    onPress={handlePress}
                    style={styles.button_style}
                >
                    <Text style={styles.text_style}>{'click me'}</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>{'Bounce Container Animations Example With Button'}</Text>
                </View>
                <BounceContainer
                    press={handlePress}
                    labelText={'Bouncing Button'}
                    toValue={25}
                    delay={1200}
                    duration={1900}
                    containerItem={getButton()} />
            </View>

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>{'Bounce Container Animations Example With Text'}</Text>
                </View>
                <BounceContainer
                    press={handlePress}
                    labelText={'Bouncing Button'}
                    toValue={35}
                    delay={1500}
                    duration={2100}
                    containerItem={<Text style={styles.red_text_style}>{'click me'}</Text>} />
            </View>
        </View>
    );
}

export default BounceExample;
