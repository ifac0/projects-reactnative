import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import TouchScreen from './src/screens/TouchScreen'; 
import PinScreen from './src/screens/PinScreen';
import HomeScreen from './src/screens/HomeScreen';
import SendRequestScreen from './src/screens/SeendRequestScreen';
import CardsScreen from './src/screens/CardsScreen';

import global from './src/styles/global';

export default function App() {
  const AppStack = createStackNavigator();
  const TabStack = createBottomTabNavigator();

  const tabBarOptions = {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    showLabel: true,
    style: {
      height: 60,
      backgroundColor: global.background,
      borderTopColor: global.global,
      paddingBottom: 12,
    }
  }

  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused}) => {
      let icon = "";
      const color = focused ? `${global.primaryColor}` : "#828282"
      const size = 24;

      switch (route.name) {
        case "Cards":
          icon = "credit-card";
          break;

        case "SendRequest":
          icon = "send";
          break;

        default: 
            icon = "dashboard"
      }
      return <MaterialIcons name={icon} size={size} color={color} />
    }
  })

  const TabStackScreens = () => {
    return (
      <TabStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
        <TabStack.Screen name="Home" component={HomeScreen} />
        <TabStack.Screen name="SendRequest" component={SendRequestScreen} options={{ title: "Transferência"}} />
        <TabStack.Screen name="Cards" component={CardsScreen} options={{ title: "Meus Cartões", color: 'red'}}/>
      </TabStack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Touch" component={TouchScreen} />
        <AppStack.Screen name="Pin" component={PinScreen} />
        <AppStack.Screen name="Tabs" component={TabStackScreens} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}