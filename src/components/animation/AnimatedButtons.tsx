import React from 'react';
import { View } from 'react-native';

import { SpringButton } from './SpringButton';
import ScalingButton from './ScalingButton';
import BounceButton from './BounceButton';
import { Props } from './index';
import styles from '../../styles/AnimatedButtons.styles';

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

export { ScButton, SpButton, BoButton };
