import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Animated, Easing, View, Alert} from 'react-native';

import { ScButton, SpButton } from './AnimatedButtons';
import { Props } from './index';

    class AButton extends React.Component {
        constructor(props) {
          super(props);
          this.press = this.press.bind(this);
        }
      
        handlePress(){
            //do anything you want
            Alert.alert('Pressed button')
        }
      
        render() {
            return (
                <View>
        
                    <SpButton press={this.handlePress} />
                    <ScButton press={this.handlePress} />
                </View>
            );
        }
}

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

export default AButton;
