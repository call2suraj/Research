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
                        <Text style={styles.textstyle}>{'Spring Button'}</Text>
                    </View>
                    <SpButton
                        press={this.handlePress}
                        labelText={'Spring Button'}
                        toValue={40}
                        delay={900}
                    />
                </View>

                <View style={styles.midcontainer}>
                    <View style={styles.header}>
                        <Text style={styles.textstyle}>{'Scaling Button'}</Text>
                    </View>
                    <View style={{alignItems:'center', justifyContent:'center', marginTop: 32}}>
                    <ScButton
                        press={this.handlePress}
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
        height: 225,
        borderRadius:4,
       //marginTop: 6,
    },
    midcontainer: {
        backgroundColor:'white', 
        height: 225,
        borderRadius:4,
       // marginTop: 16,
    },
    header: {
        backgroundColor: '#e6e6e6',  marginTop: 3, marginBottom: 5, color:'black'
    },
    nested_header: {
        //backgroundColor: '#1abc9c', 
        backgroundColor: '#0c570a',
        height: 'auto',
        marginBottom: 5,
    },
    textstyle: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'black',

        padding: 8
    },
    marginextra: {
       justifyContent: 'center',
       marginTop: 5
    }
  
});

export default AButton;
