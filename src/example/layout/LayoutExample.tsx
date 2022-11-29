import React from 'react';
import { StyleSheet, View, Alert,Text } from 'react-native';

import { ScButton, SpButton, BoButton } from '../../components/animation/AnimatedButtons';
import LayoutAnimations from '../../components/animation/LayoutAnimations';

class LayoutExample extends React.Component {
    constructor(props) {
        super(props);
    }

    handlePress() {
        //do anything you want
        Alert.alert('Pressed button')
    }

    render() {
        return (
            <View>

                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.textstyle}>{'Layout Animations'}</Text>
                    </View>
                    <LayoutAnimations />
                </View>

                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.textstyle}>{'Fed-In Layout'}</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.textstyle}>{'Fed-Out Layout'}</Text>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white', 
        height: 255
    },
    header: {
        backgroundColor: '#0c570a', height: 30, marginTop: 3, marginBottom: 5
    },
    nested_header: {
        //backgroundColor: '#1abc9c', 
        backgroundColor: '#0c570a',
        height: 30,
        marginBottom: 5,
    },
    textstyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },

  
});

export default LayoutExample;
