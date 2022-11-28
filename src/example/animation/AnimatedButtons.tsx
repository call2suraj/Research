import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Alert, Button, Text } from 'react-native';

import { SpringButton } from './SpringButton';
import ScalingButton from './ScalingButton';
import { Props } from './index';

const ScButton: React.FC<Props> = (props: Props) => (
    <View style={{ marginTop: 40 }}>
        <View style={styles.header}>
            <Text style={styles.textstyle}>{'Scaling Button'}</Text>
        </View>
        <ScalingButton
            labelText={'Scaling Button'}
            callBack={props.press}
            styles={{ button: styles.animated_button, label: styles.button_label }} />
    </View>
);


const SpButton: React.FC<Props> = (props: Props) => (
    <View>
        <View style={styles.header}>
            <Text style={styles.textstyle}>{'Spring Button'}</Text>
        </View>
        <SpringButton labelText={'Spring Button'} callBack={props.press} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 30
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
    }
});

export { ScButton, SpButton };
