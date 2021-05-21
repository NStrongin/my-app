import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  
  const [isStartGame, setStateGame] = useState(false); // check start of game

  const [matches, setMatches] = useState(25);// matches

  const startGame = () => { //start new Game
    setStateGame(isStartGame ? false : true);
    setMatches(25);
    setComputer(0);
    setPlayer(0);
  };

  const [isPlayer, setIsPlayer] = useState(true);

  const computerTurn = () => {  // computer`s turn to take matches
    
    switch(matches){

      case 1:
        computerGetOneMatch();
        break;

      case 2:
        computer%2 == 0 ? computerGetTwoMatches() : omputerGetOneMatch();
        break;

      case 3:
        computer%2 == 0 ? computerGetTwoMatches() : computerGetThreeMatches();
        break;
      
      default:
        computerGetTwoMatches();
        break;
    }

    setIsPlayer(true);
  };

  const computerGetOneMatch = () => { // computer takes one match
    setComputer(computer + 1);
    setMatches(matches - 1);
  };

  const computerGetTwoMatches = () => { // computer takes two matches
    setComputer(computer + 2);
    setMatches(matches - 2);
  };

  const computerGetThreeMatches = () => { // computer takes three matches
    setComputer(computer + 3);
    setMatches(matches - 3);
  };

  const whoWin = () => { // check who win

    Alert.alert( player%2 == 0 ? "Win Player" : "Win Computer")
    startGame();
  };

  useEffect( ()=>{ 
    if (matches == 0)
      whoWin();
    else !isPlayer ? computerTurn() : null; // if nobody won it`s computer`s turn
  });

  const [player, setPlayer] = useState(0);

  const [computer, setComputer] = useState(0); 

  const [playerGo, setPlayerGo] = useState(true);

  const getOneMarches = () => { //player takes 1 match
    if (matches-1 < 0)// check amount of matches
    {
      Alert.alert("Matches less then 1")
    }
    else{
      setIsPlayer(false);
      setMatches(matches-1);
      setPlayer(player+1);
    }
  };

  const getTwoMarches = () => { //player take 2 matches
    if (matches-2 < 0)
    {
      Alert.alert("Matches less then "+String(2))
    }
    else{
      setIsPlayer(false);
      setMatches(matches-2);
      setPlayer(player+2);
    }
  };

  const getThreeMarches = () => { //player takes 3 matches
    if (matches-3 < 0) // check amount of matches
    {
      Alert.alert("Matches less then "+String(3))
    }
    else{
      setIsPlayer(false);
      setMatches(matches-3);
      setPlayer(player+3);
    }
  };


  return (
    <View style={styles.container}>

      <View style={[styles.mainBlocks]}>
        <Button
          title='Start game'
          color='#442EF0'
          disabled={isStartGame}
          onPress={startGame}
          style={styles.startButton}
        />
      </View>

      <View style={[styles.mainBlocks, styles.center]}>
        <View style={[styles.matches]}>
          <Text>Matches: {matches}</Text>
        </View>

        <View>
          <Text>Players: {player}</Text>
        </View>

        <View>
          <Text>Computer: {computer}</Text>
        </View>
      </View>

      <View style={[styles.mainBlocks]}>
        <Button
          title='Take 1 match'
          color='#F06960'
          onPress={getOneMarches}
          disabled={!isStartGame}
        />
        <Button
          title='Take 2 matches'
            color='#49C0F0'
            disabled={!isStartGame}
          onPress={getTwoMarches}
        />
        <Button
          title='Take 3 matches'
            color='#3CF086'
            disabled={!isStartGame}
          onPress={getThreeMarches}
        />
      </View>

      <View style={[styles.mainBlocks]}>
        <Button
          title='End game'
          color='red'
          disabled={!isStartGame}
          onPress={startGame}
          style={styles.startButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:30,
    flex: 1,
    backgroundColor: '#F0D530',
  },

  center:{
    alignItems: 'center',
  },

  matches:{
    flex:1,
    width:'50%',
    borderWidth: 5,
    borderColor:'#F09B08',
    borderRadius:20,
    backgroundColor:'beige',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40
  },

  mainBlocks: {
    justifyContent: 'center',
    flex:1,
  },
});
