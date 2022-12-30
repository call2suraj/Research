import React from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import { ScButton, SpButton, BoButton } from '../../components/animation/AnimatedButtons';
import styles from '../../styles/ButtonExample.style';

const AButton: React.FC<Props> = (props: Props) => {

    const handlePress = () => {
        //do anything you want
        Alert.alert('Pressed button')
    }
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>{'Spring Button'}</Text>
                </View>
                <SpButton
                    press={handlePress}
                    labelText={'Spring Button'}
                    toValue={40}
                    delay={900}
                />
            </View>

            <View style={styles.midcontainer}>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>{'Scaling Button'}</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 32 }}>
                    <ScButton
                        press={handlePress}
                        labelText={'Scaling Button'}
                        toValue={1}
                        delay={300} />
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>{'Bouncing Button'}</Text>
                </View>
                <BoButton
                    press={handlePress}
                    labelText={'Bouncing Button'}
                    toValue={25}
                    delay={1200}
                    duration={1900}
                />
            </View>
        </View>
    );
}

export default AButton;
