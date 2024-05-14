import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';

export default function HomeScreen({ navigation }) {
  const handleStartGame = () => {
    console.log("Navigating to GameScreen...");
    navigation.navigate('GameScreen');
  };

  const handleMultiplayer = () => {
    console.log("Navigating to MultiplayerScreen...");
    navigation.navigate('MultiplayerScreen');
  };

  const handleTournois = () => {
    console.log("Navigating to TournoisScreen...");
    navigation.navigate('TournoisScreen');
  };

  const showAlert = () => {
    Alert.alert('Button Pressed', 'This button does something in the backend.');
  };

  return (
    <View style={styles.container}>
      <Button title="Start Game" onPress={handleStartGame} color="#2196F3" fontWeight="bold" />
      <Button title="Multiplayer" onPress={handleMultiplayer} color="#4CAF50" fontWeight="bold" />
      <Button title="Tournois" onPress={handleTournois} color="#FFC107" fontWeight='bold' />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
  
});
