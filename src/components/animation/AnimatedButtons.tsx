import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';

import { SpringButton } from './SpringButton';
import ScalingButton from './ScalingButton';
import BounceButton from './BounceButton';
import { Props } from './index';

const ScButton: React.FC<Props> = (props: Props) => (
    <View>
        <ScalingButton
            labelText={props.labelText}
            callBack={props.press}
            toValue={props.toValue}
            delay={props.delay}
            styles={{ button: styles.animated_button, label: styles.button_label }} />
    </View>
);


const SpButton: React.FC<Props> = (props: Props) => (
    <View>
        <SpringButton
            labelText={props.labelText}
            callBack={props.press}
            toValue={props.toValue}
            delay={props.delay} />
    </View>
);


const BoButton: React.FC<Props> = (props: Props) => (
    <View>
        <BounceButton
            labelText={props.labelText}
            callBack={props.press}
            toValue={props.toValue}
            delay={props.delay} 
            duration={props.duration}/>
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

export { ScButton, SpButton, BoButton };
