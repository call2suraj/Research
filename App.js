import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeApp from './src/example/home/MainApp';
import ButtonExample from './src/example/buttons/ButtonExample';
import Buttons from './src/components/animation/Buttons';
import AllAnimations from './src/example/all/AllAnimations';
import Accordion from './src/components/animation/Accordion';
import InnerComponent from './src/components/animation/InnerComponent';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}


function AccordionExample() {
    return (
        <View style={{ flexDirection: 'column', margin: 0, width:'92%' }}>
          <View>
            <Accordion headerText="Unavailable Test"
              headerBody={<InnerComponent myprop={'animation'} />}
              isCollapse={true}
              bgcolor={'#EEEEEE'} />
          </View>
        </View>
    );
  }

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Home" component={HomeApp} />
      <Drawer.Screen name="Accordion" component={AccordionExample} />
      <Drawer.Screen name="Buttons" component={ButtonExample} />
      <Drawer.Screen name="All" component={AllAnimations} />
      
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
