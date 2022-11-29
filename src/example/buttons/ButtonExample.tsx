import React from 'react';
import { StyleSheet, View, Alert,Text } from 'react-native';

import { ScButton, SpButton, BoButton } from '../../components/animation/AnimatedButtons';

class AButton extends React.Component {
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
                        <Text style={styles.textstyle}>{'Bouncing Button'}</Text>
                    </View>
                    <SpButton
                        press={this.handlePress}
                        labelText={'Spring Button'}
                        toValue={40}
                        delay={900}
                    />
                </View>

                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.textstyle}>{'Bouncing Button'}</Text>
                    </View>
                    <ScButton
                        press={this.handlePress}
                        labelText={'Scaling Button'}
                        toValue={1}
                        delay={300} />
                </View>

                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.textstyle}>{'Bouncing Button'}</Text>
                    </View>
                    <BoButton
                        press={this.handlePress}
                        labelText={'Bouncing Button'}
                        toValue={25}
                        delay={1200}
                        duration={1900}
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white', 
        height: 125,
        borderRadius:4
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

export default AButton;
