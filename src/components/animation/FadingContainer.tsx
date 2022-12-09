import React, { useRef, useEffect, useState } from "react";
import { Animated, Text, View, StyleSheet, SafeAreaView, Image } from "react-native";
import styles from '../../styles/FadingContainer.style';

const FadingContainer: React.FC<Props> = (props: Props) => {
    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [isMounted, setIsMounted] = useState(false)

    const fadeOut = () => {
        console.log('invoked....fadeOut')
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: false
        }).start();
    };

    useEffect(() => {
        console.log('invoked....fading');
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000,
            //delay: 900,
            useNativeDriver: false,
            // useNativeDriver: true, // This makes your animations run on the UI thread directly
        }).start();
        setIsMounted(true);
        setTimeout(fadeOut, 8000)
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <Animated.View
                style={{
                    width: 400,
                    height: 40,
                    opacity: fadeAnim,
                    transform: [{ translateY: fadeAnim }],
                }}
            >
               <View style={styles.container_item}>
                 {props.containerItem}
               </View> 
              
            </Animated.View>
        </SafeAreaView>
    );
}



export default FadingContainer;
