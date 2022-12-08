import React from 'react';
import { StyleSheet, View, Alert, Text, Pressable } from 'react-native';

import { ScButton, SpButton, BoButton } from '../../components/animation/AnimatedButtons';
import FadingContainer from '../../components/animation/FadingContainer';

class FadingContainerExample extends React.Component {
    constructor(props) {
        super(props);
    }

    handlePress() {
        //do anything you want
        Alert.alert('Container button Pressed !!!')
    }

    getButton() {
        return (
            <View>
                <Pressable // you can use Pressable aswell
                    accessible={true}
                    accessibilityLabel="Go back"
                    accessibilityHint="Hint button type"
                    accessibilityRole="button"
                    onPress={this.handlePress}
                    style={{ backgroundColor: '#c20000', width: 200, height: 50, alignItems: 'center', justifyContent: 'center' }}
                >
                    <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>{'click me'}</Text>
                </Pressable>
            </View>
        )
    }
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.textstyle}>{'Fading Container Animations Example With Button'}</Text>
                    </View>
                    <View style={{ padding: 75}}>
                        <FadingContainer containerItem={this.getButton()}/>
                    </View>
                    
                </View>

                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.textstyle}>{'Fading Container Animations Example With Text'}</Text>
                    </View>
                    <FadingContainer containerItem={<Text style={{ fontSize: 18, color: 'red', textAlign: 'center' }}>{'click me'}</Text>} />
                </View>
            </View>
        );
    }
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

export default FadingContainerExample;
