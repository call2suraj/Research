import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Alert, Text, Pressable } from 'react-native';
import { Props } from './index';
 import styles from '../../styles/SpringExample.style';
import SpringContainer from '../../components/animation/SpringContainer';

const SpringExample: React.FC<Props> = (props: Props) => {
    const handlePress = () => {
        //do anything you want
        Alert.alert('Container button Pressed !!!')
    }

    const getButton = () => {
        return (
            <View style={{ alignItems: 'center' }}>
                <Pressable // you can use Pressable aswell
                    accessible={true}
                    accessibilityLabel="Go back"
                    accessibilityHint="Hint button type"
                    accessibilityRole="button"
                    onPress={handlePress}
                    style={{ backgroundColor: '#c20000', width: 200, height: 50, alignItems: 'center', justifyContent: 'center' }}
                >
                    <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>{'click me'}</Text>
                </Pressable>
            </View>
        )
    }
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>{'Spring Container Animations Example With Button'}</Text>
                </View>
                <SpringContainer
                    backgroundColor={'white'}
                    width={300}
                    height={50}
                    toValue={50}
                    delay={900}
                    containerItem={getButton()} />
            </View>

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>{'Spring Container Example With Text'}</Text>
                </View>
                <SpringContainer
                    width={200}
                    height={60}
                    toValue={40}
                    delay={1300}
                    containerItem={<Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>{'Click Me'}</Text>} />
            </View>
        </View>
    );
}

export default SpringExample;
