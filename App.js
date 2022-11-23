import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import FedInFedOut from './src/animation/FedInFedOut';
import Accordion from './src/example/animation/Accordion';
import Buttons from './src/example/animation/Buttons';

import InnerComponent from './src/example/animation/InnerComponent';
import LayoutAnimations from './src/example/animation/LayoutAnimations';
import DragDrop from './src/example/animation/DragDrop';

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

        <View style={styles.buttonStyle}>
          <Button title="Buttons" onPress={() => selectComponent('Buttons')} style={{fontSize:10}}/>
        </View>

        <View style={styles.buttonStyle}>
          <Button title="Accordion" onPress={() => selectComponent('Accordion')} />
        </View>

        <View style={styles.buttonStyle}>
          <Button title="Fedin" onPress={() => selectComponent('Fedin')} />
        </View>

        <View style={styles.buttonStyle}>
          <Button title="Layout" onPress={() => selectComponent('Layout')} />
        </View>

        <View style={styles.buttonStyle}>
          <Button title="DragDrop" onPress={() => selectComponent('DragDrop')} />
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

      {screen === 'Layout' && <LayoutAnimations />}

      {screen === 'DragDrop' && <DragDrop />}

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
});
