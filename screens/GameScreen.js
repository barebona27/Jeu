import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

const ROWS = 6;
const COLS = 7;
const PLAYER_1_SYMBOL = 'X';
const PLAYER_2_SYMBOL = 'O';

export default function GameScreen() {
  const [board, setBoard] = useState(createEmptyBoard());
  const [currentPlayer, setCurrentPlayer] = useState('');
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [currentPlayerName, setCurrentPlayerName] = useState('');
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const randomPlayer = Math.random() < 0.5 ? PLAYER_1_SYMBOL : PLAYER_2_SYMBOL;
    setCurrentPlayer(randomPlayer);
    setCurrentPlayerName(randomPlayer === PLAYER_1_SYMBOL ? player1Name : player2Name);
    // Définir les noms des joueurs ici
    setPlayer1Name("Nom du joueur 1");
    setPlayer2Name("Nom du joueur 2");
  }, []);

  useEffect(() => {
    if (winner) {
      Alert.alert('Gagnant', `Le joueur ${currentPlayerName} a gagné !`);
      setBoard(createEmptyBoard());
      setWinner(null);
    }
  }, [winner]);

  function createEmptyBoard() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(null));
  }

  function dropToken(column) {
    for (let row = ROWS - 1; row >= 0; row--) {
      if (board[row][column] === null) {
        const newBoard = [...board];
        newBoard[row][column] = currentPlayer;
        setBoard(newBoard);
        if (checkWin(row, column)) {
          setWinner(currentPlayer);
        } else {
          setCurrentPlayer(currentPlayer === PLAYER_1_SYMBOL ? PLAYER_2_SYMBOL : PLAYER_1_SYMBOL);
          setCurrentPlayerName(currentPlayerName === player1Name ? player2Name : player1Name);
        }
        break;
      }
    }
  }

  function checkWin(row, col) {
    // Vérifier les lignes
    for (let c = 0; c <= COLS - 4; c++) {
      if (
        board[row][c] === currentPlayer &&
        board[row][c + 1] === currentPlayer &&
        board[row][c + 2] === currentPlayer &&
        board[row][c + 3] === currentPlayer
      ) {
        return true;
      }
    }
  
    // Vérifier les colonnes
    for (let r = 0; r <= ROWS - 4; r++) {
      if (
        board[r][col] === currentPlayer &&
        board[r + 1][col] === currentPlayer &&
        board[r + 2][col] === currentPlayer &&
        board[r + 3][col] === currentPlayer
      ) {
        return true;
      }
    }
  
    // Vérifier les diagonales
    for (let r = 0; r <= ROWS - 4; r++) {
      for (let c = 0; c <= COLS - 4; c++) {
        if (
          board[r][c] === currentPlayer &&
          board[r + 1][c + 1] === currentPlayer &&
          board[r + 2][c + 2] === currentPlayer &&
          board[r + 3][c + 3] === currentPlayer
        ) {
          return true;
        }
        if (
          board[r + 3][c] === currentPlayer &&
          board[r + 2][c + 1] === currentPlayer &&
          board[r + 1][c + 2] === currentPlayer &&
          board[r][c + 3] === currentPlayer
        ) {
          return true;
        }
      }
    }
  
    return false;
  }
  

  function renderCell(row, col) {
    const cellValue = board[row][col];
    return (
      <View
        key={`${row}-${col}`}
        style={styles.cell}
        onPress={() => dropToken(col)}
        disabled={winner !== null || cellValue !== null}
      >
        <Text style={styles.cellText}>{cellValue}</Text>
      </View>
    );
  }

  function renderBoard() {
    return board.map((row, rowIndex) => (
      <View style={styles.row} key={rowIndex}>
        {row.map((_, colIndex) => renderCell(rowIndex, colIndex))}
      </View>
    ));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Puissance 4</Text>
      <Text>Joueur actuel: {currentPlayerName}</Text>
      <View style={styles.board}>{renderBoard()}</View>
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
  board: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 40,
    height: 40,
    backgroundColor: 'lightblue',
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 24,
  },
});
