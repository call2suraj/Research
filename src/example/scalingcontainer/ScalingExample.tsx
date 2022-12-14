import React from 'react';
import { StyleSheet, View, Alert, Text, Pressable } from 'react-native';
import ScalingContainer from '../../components/animation/ScalingContainer';

const ScalingExample: React.FC<Props> = (props: Props) => {
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
                    <Text style={styles.textstyle}>{'Scaling Container Animations Example With Button'}</Text>
                </View>
                <ScalingContainer
                    labelText={'Scaling Button'}
                    toValue={1}
                    delay={300}
                    containerItem={getButton()} />
            </View>

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>{'Scaling Container Example With Text'}</Text>
                </View>
                <ScalingContainer
                    labelText={'Click me'}
                    toValue={1}
                    delay={300}
                    containerItem={<Text style={{ fontSize: 18, color: 'red', textAlign: 'center' }}>{'Click Me'}</Text>} />
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

export default ScalingExample;
