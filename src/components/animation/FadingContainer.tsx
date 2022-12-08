import React, { useRef, useEffect, useState } from "react";
import { Animated, Text, View, StyleSheet, SafeAreaView, Image } from "react-native";

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
               <View style={{ height: 300, width: 400, marginTop: 35}}>
                 {props.containerItem}
               </View> 
              
            </Animated.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    fadingContainer: {
        padding: 10,
        backgroundColor: "powderblue"
    },
    fadingText: {
        fontSize: 18,
        padding: 7
    },
    buttonRow: {
        marginVertical: 10,
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'red'
    },
    buttonStyle: {
        marginHorizontal: 20,
        marginTop: 5
      }
});

export default FadingContainer;
