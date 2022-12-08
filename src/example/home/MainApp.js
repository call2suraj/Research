import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainApp from '../../navigation';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import FedInFedOut from '../../components/animation/FedInFedOut';
import Accordion from '../../components/animation/Accordion';
import Buttons from '../../components/animation/Buttons';
import ButtonExample from '../buttons/ButtonExample';

import InnerComponent from '../../components/animation/InnerComponent';
import LayoutAnimations from '../../components/animation/LayoutAnimations';
import LayoutExample from '../layout/LayoutExample';
import DragDrop from '../../components/animation/DragDrop';

export default function HomeApp() {
  const [screen, setScreen] = useState('Buttons');
  // const selectComponent = (arg) => {
  //   console.log(arg);
  //   setScreen(arg);
  // };
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function LogoTitle() {
    return (
      // <Image
      //   style={{ width: 50, height: 50 }}
      //   source={require('@expo/snack-static/react-native-logo.png')}
      // />

      // <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <Entypo name="menu" size={24} color="black" />
    );
  }

  return (
    

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ButtonExample}
          //options={{ title: 'Welcome' }}
          // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          options={{
            headerTitle: () => (
              <Text
                style={{ width: 300, color: 'white', textAlign: 'center', paddingLeft: 22, fontWeight: 'bold' }}>
                Button Examples
              </Text>),
            headerRight: () => (
              <View>
               {/* <AntDesign name="infocirlceo" size={20} color="black" /> */}
              </View>
            ),
            headerLeft: () => (
              <View>
              {/* uncomment below code if you need inner menus */}
               {/* <Entypo name="menu" size={24} color="black" onPress={() => alert('This is a button!')}/> */}
              </View>
            ),
            headerStyle: {
              backgroundColor: '#3a4f59',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        {/* <Stack.Screen name="Accordion" component={Accordion} /> */}
      </Stack.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20
  },
  buttonStyle: {
    marginHorizontal: 2,
    marginTop: 5,
    width: 80,
    fontSize: 10,
    backgroundColor: '#2196F3',
    color: 'white'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2196F3',
  },
  text: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  pressbutton: {
    marginHorizontal: 1,
    height: 30,
    width: 'auto',
    fontSize: 10,
    padding: 3,
    backgroundColor: '#2196F3',
    color: 'white',
    borderRadius: 4
  }
});
