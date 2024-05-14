import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

export default function MultiplayerScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [roomCode, setRoomCode] = React.useState('');

  const handleJoinRoom = () => {
    if (!username.trim() || !roomCode.trim()) {
      Alert.alert('Erreur', 'Veuillez saisir un nom d\'utilisateur et un code de salle.');
      return;
    }
    console.log(`L'utilisateur ${username} a rejoint la salle ${roomCode}.`);
    Alert.alert('Connexion réussie', `Vous avez rejoint la salle ${roomCode}.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mode multijoueur en ligne</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Code de la salle"
        value={roomCode}
        onChangeText={text => setRoomCode(text)}
      />
      <Button
        title="Rejoindre la salle"
        onPress={handleJoinRoom}
      />
      <Button
        title="Retour"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
