import React from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import LayoutAnimations from '../../components/animation/LayoutAnimations';

const LayoutExample: React.FC<Props> = (props: Props) => {

    const handlePress = () => {
        //do anything you want
        Alert.alert('Pressed button')
    }

    return (
        <View>

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>{'Layout Animations'}</Text>
                </View>
                <LayoutAnimations />
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

export default LayoutExample;
