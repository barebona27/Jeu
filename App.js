import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import des composants d'écran
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import MultiplayerScreen from './screens/MultiplayerScreen';
import TournoisScreen from './screens/TournoisScreen'; 
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
        <Stack.Screen name="MultiplayerScreen" component={MultiplayerScreen} />
        <Stack.Screen name="TournoisScreen" component={TournoisScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

