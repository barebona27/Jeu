import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

// Liste des tournois avec leurs dates disponibles
const tournaments = [
  { name: 'Tournoi A', players: ['John', 'Alice', 'Bob'] },
  { name: 'Tournoi B', players: ['James', 'Aicha', 'Ibrahim'] },
  { name: 'Tournoi C', players: ['David', 'Emily', 'James'] },
];

export default function TournoisScreen({ navigation }) {
  const [selectedTournois, setSelectedTournois] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleTournoisSelect = (tournament) => {
    setSelectedTournois(tournament);
  };

  const handlePlayerSelect = (player) => {
    setSelectedPlayer(player);
  };

  const handleStartTournois = () => {
    if (selectedTournois && selectedPlayer) {
      Alert.alert('Confirmation', `Vous avez sélectionné le tournoi 
      "${selectedTournois.name}" avec le joueur "${selectedPlayer}".`);
      // Ajoutez ici le code pour démarrer le tournoi avec les détails sélectionnés
    } else {
      Alert.alert('Erreur', 'Veuillez sélectionner un tournoi et un joueur.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sélectionnez un tournoi :</Text>
      <View style={styles.tournoisList}>
        {tournois.map((tournois, index) => (
          <View
            key={index}
            style={[styles.tournoisItem, selectedTournois === tournois && styles.selectedItem]}
            onPress={() => handleTournoisSelect(tournois)}
          >
            <Text>{tournois.name}</Text>
          </View>
        ))}
      </View>
      {selectedTournois && (
        <View>
          <Text style={styles.title}>Choisissez un joueur :</Text>
          <View style={styles.playerList}>
            {selectedTournois.players.map((player, index) => (
              <View
                key={index}
                style={[styles.playerItem, selectedPlayer === player && styles.selectedItem]}
                onPress={() => handlePlayerSelect(player)}
              >
                <Text>{player}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
      <Button title="Démarrer le tournoi" onPress={handleStartTournois} />
      <Button title="Retour" onPress={() => navigation.goBack()} />
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tournamentList: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tournamentItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
  },
  playerList: {
    flexDirection: 'row',
  },
  playerItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
  },
  selectedItem: {
    backgroundColor: 'lightblue',
  },
});

