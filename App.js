import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, } from 'react-native';
import FedInFedOut from './src/animation/FedInFedOut';
import Accordion from './src/components/animation/Accordion';
import Buttons from './src/components/animation/Buttons';
import AButton from './src/example/buttons/ButtonExample';

import InnerComponent from './src/components/animation/InnerComponent';
import LayoutAnimations from './src/components/animation/LayoutAnimations';
import LayoutExample from './src/example/layout/LayoutExample';
import DragDrop from './src/components/animation/DragDrop';

export default function App() {
  const [screen, setScreen] = useState('Buttons');
  const selectComponent = (arg) => {
    console.log(arg);
    setScreen(arg);
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, padding: 5, alignItems: 'center', justifyContent: 'center' }}>Animation Examples</Text>
      </View>

      <StatusBar style="auto" />

      <View style={{ flexDirection: "row" }}>

        <View style={styles.pressbutton}>
          <Pressable onPress={() => selectComponent('Buttons')} style={{fontSize:10}}>
          <Text style={{fontSize: 16, color:'white'}}>Buttons</Text>
          </Pressable>
        </View>

        <View style={styles.pressbutton}>
          <Pressable onPress={() => selectComponent('Accordion')} style={{ fontSize: 10 }}>
            <Text style={{ fontSize: 16, color: 'white' }}>Accordion</Text>
          </Pressable>
        </View>


        <View style={styles.pressbutton}>
          <Pressable onPress={() => selectComponent('Fedin')} style={{ fontSize: 10 }}>
            <Text style={{ fontSize: 16, color: 'white' }}>Fedin</Text>
          </Pressable>
        </View>

        <View style={styles.pressbutton}>
          <Pressable onPress={() => selectComponent('Layout')} style={{ fontSize: 10 }}>
            <Text style={{ fontSize: 16, color: 'white' }}>Layout</Text>
          </Pressable>
        </View>


        <View style={styles.pressbutton}>
          <Pressable onPress={() => selectComponent('DragDrop')} style={{ fontSize: 10 }}>
            <Text style={{ fontSize: 16, color: 'white' }}>DragDrop</Text>
          </Pressable>
        </View>

        <View style={styles.pressbutton}>
          <Pressable onPress={() => selectComponent('AButton')} style={{ fontSize: 10 }}>
            <Text style={{ fontSize: 16, color: 'white' }}>AButton</Text>
          </Pressable>
        </View>
      </View>


      {screen === 'Buttons' && <Buttons />}

      {screen === 'Accordion' &&
        <View style={{ flexDirection: 'column', margin: 5, width:'90%' }}>
          <View>
            <Accordion headerText="Unavailable Test"
              headerBody={<InnerComponent myprop={'animation'} />}
              isCollapse={true}
              bgcolor={'#EEEEEE'} />
          </View>
        </View>
      }

      {screen === 'Fedin' && <FedInFedOut />}

      {screen === 'Layout' && <LayoutExample />}

      {screen === 'DragDrop' && <DragDrop />}

      {screen === 'AButton' && <AButton />}

    </View>
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
color:'white'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 8,
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
  marginHorizontal: 2,
  height:30,
  width: 'auto',
  fontSize: 10,
  padding: 4,
  backgroundColor: '#2196F3',
  color: 'white',
  borderRadius:4
}
});
