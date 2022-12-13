import React, { useRef, useEffect, useState } from "react";
import { Animated, Text, View, StyleSheet, SafeAreaView, Image } from "react-native";
import styles from '../../styles/FadeInFadeOut.style';

const FedInFedOut = () => {
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
        console.log('invoked....fedin');
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
                    // backgroundColor: "white",
                    transform: [{ translateY: fadeAnim }],
                }}
            >
               <View style={styles.fading_view}>
               <Text style={styles.fadingText}>Fading View!</Text>
                <Image style={styles.fading_img}
                    //resizeMode={'contain'}
                    source={require('../../../assets/nabmoney.png')}
                />
               </View>
            </Animated.View>
        </SafeAreaView>
    );
}

export default FedInFedOut;
