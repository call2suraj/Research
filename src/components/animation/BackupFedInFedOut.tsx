import React, { useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, Image } from "react-native";

const FedInFedOut = () => {
    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false
            // useNativeDriver: true, // This makes your animations run on the UI thread directly
        }).start();
    };

    const fadeOut = () => {
        console.log('invoked....')
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: false
        }).start();
    };



    useEffect(() => {
        console.log('invoked....')
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false,
        }).start();
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <Animated.View
            style={{
                //backgroundColor: '#2196f3',
                paddingTop: 5,
                width: 150,
                height: 40,
                opacity: fadeAnim,
                padding: 10,
                backgroundColor: "powderblue",
                transform: [{ translateY: fadeAnim }],
            }}
                // style={[
                //     styles.fadingContainer,
                //     {
                //         // Bind opacity to animated value
                //         opacity: fadeAnim
                //     }
                // ]}
            >
                <Text style={styles.fadingText}>Fading View!</Text>
                <Image
                    resizeMode={'contain'}
                    source={require('../../../assets/nab.png')}
                />
            </Animated.View>

            <View style={{ flexDirection: "row" }}>
                <View style={styles.buttonStyle}>
                    <Button title="Fade In View.." onPress={fadeIn} />
                </View>
                <View style={styles.buttonStyle}>
                    <Button title="Fade Out View" onPress={fadeOut} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {

        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    },
    fadingContainer: {
        padding: 10,
        backgroundColor: "powderblue"
    },
    fadingText: {
        fontSize: 18
    },
    buttonRow: {
       // flexBasis: 100,
       // justifyContent: "space-evenly",
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

export default FedInFedOut;
