import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeApp from './src/example/home/MainApp';
import ButtonExample from './src/example/buttons/ButtonExample';
import DragDrop from './src/components/animation/DragDrop';
import Buttons from './src/components/animation/Buttons';
import FedInFedOut from './src/components/animation/FedInFedOut';
import AllAnimations from './src/example/all/AllAnimations';
import Accordion from './src/components/animation/Accordion';
import InnerComponent from './src/components/animation/InnerComponent';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
    <View style={{ flexDirection: 'column', margin: 0, width: '92%' }}>
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
      <Drawer.Screen name="Home" component={HomeApp}

        options={{
          title: 'Home',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="md-home"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
          // drawerStyle: {
          //   backgroundColor: '#c6cbef',
          //   width: 240,
          // },
          // drawerContentContainerStyle: { backgroundColor: 'white', },
          // drawerItemStyle: { width: '96%', margin: 0, padding: 0 }
        }} />
      <Drawer.Screen name="Accordion" component={AccordionExample}
        options={{
          title: 'Accordion',
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons name="arrow-down-drop-circle-outline" size={24} color={focused ? '#7cc' : '#ccc'} />
          ),
        }} />
      <Drawer.Screen name="Buttons" component={Buttons}
        options={{
          title: 'Buttons',
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons name="gesture-tap-button" size={24} color={focused ? '#7cc' : '#ccc'} />
          ),
        }} />


      <Drawer.Screen name="Drag & Drop" component={DragDrop}
        options={{
          title: 'Drag & Drop',
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons name="selection-drag" size={24} color={focused ? '#7cc' : '#ccc'} />
          ),
        }} />

      <Drawer.Screen name="Fading View" component={FedInFedOut}
        options={{
          title: 'Fading View',
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons name="image-filter-center-focus-weak" size={24} color={focused ? '#7cc' : '#ccc'} />
          ),
        }} />

      <Drawer.Screen name="All" component={AllAnimations}
        options={{
          title: 'All',
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons name="basket-fill" size={24} color={focused ? '#7cc' : '#ccc'} />
          ),
        }} />

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
