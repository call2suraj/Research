
import React, { Component, useEffect, useRef } from 'react';
import {StyleSheet, AppRegistry,Text, View,Animated,Easing} from 'react-native';  
import { Props } from './index';

    const DisplayAnImage: React.FC<Props> = (props: Props) => {

    const animatedValue = useRef(
        new Animated.Value(0)
    ).current;


    useEffect(() => {
        animatedValue.setValue(0)  
        Animated.timing(  
            animatedValue,  
            {
                toValue: 1,
                duration: 200,
                easing: Easing.linear,
                useNativeDriver: false
            }  
        ).start()  
    }, []);
 
        const marginLeft = animatedValue.interpolate({  
            inputRange: [0, 1],  
            outputRange: [0, 100]  
        })  
        const opacity = animatedValue.interpolate({  
            inputRange: [0, 0.5, 1],  
            outputRange: [0, 1, 0]  
        })  
        const movingMargin = animatedValue.interpolate({  
            inputRange: [0, 0.5, 1],  
            outputRange: [0, 200, 0]  
        })  
        const textSize = animatedValue.interpolate({  
            inputRange: [0, 0.5, 1],  
            outputRange: [18, 32, 18]  
        })  
        const rotateX = animatedValue.interpolate({  
            inputRange: [0, 0.5, 1],  
            outputRange: ['0deg', '180deg', '0deg']  
        })  
  
  
        return (  
            <View style={styles.container}>  
                <Animated.View //returns Animated.View  
                    style={{  
                        marginLeft,  
                        height: 30,  
                        width: 40,  
                        backgroundColor: 'red'}} />  
                <Animated.View  
                    style={{  
                        opacity,  
                        marginTop: 5,  
                        height: 30,  
                        width: 40,  
                        backgroundColor: 'blue'}} />  
                <Animated.View  
                    style={{  
                        marginLeft: movingMargin,  
                        marginTop: 10,  
                        height: 30,  
                        width: 40,  
                        backgroundColor: 'orange'}} />  
                <Animated.Text // returns Animated.Text  
                    style={{  
                        fontSize: textSize,  
                        marginTop: 10,  
                        color: 'green'}} >  
                    Animated Text!  
                </Animated.Text>  
                <Animated.View   
                    style={{  
                        transform: [{rotateX}],  
                        marginTop: 10,  
                        height: 30,  
                        width: 40,  
                        backgroundColor: 'black'}}>  
                    <Text style={{color: 'white'}}>Hello from TransformX</Text>  
                </Animated.View>  
            </View>  
        )  
    }  
 
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        paddingTop: 1
    }  
})   

export default DisplayAnImage;