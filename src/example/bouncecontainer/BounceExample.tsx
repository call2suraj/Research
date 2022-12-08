import React from 'react';
import { StyleSheet, View, Alert, Text, Pressable } from 'react-native';
import BounceContainer from '../../components/animation/BounceContainer';

const BounceExample: React.FC<Props> = (props: Props) => {
    const handlePress = () => {
        //do anything you want
        Alert.alert('Container button Pressed !!!')
    }

    const getButton = () => {
        return (
            <View>
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
                    containerItem={<Text style={{ fontSize: 18, color: 'red', textAlign: 'center' }}>{'click me'}</Text>} />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 255,
        marginTop: 5
    },
    header: {
        backgroundColor: '#e6e6e6', marginTop: 3, marginBottom: 5, color: 'black', padding: 10
    },
    nested_header: {
        backgroundColor: '#0c570a',
        height: 30,
        marginBottom: 5,
    },
    textstyle: {
        fontSize: 16,
        color: 'black'
    },
});

export default BounceExample;
