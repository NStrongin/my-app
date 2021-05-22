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
    
    (matches - 1) % 4 == 1 || (matches - 1) % 4 == 0 ? computerGetMatch(1) : computerGetMatch(3);
    setIsPlayer(true);
  };

  const computerGetMatch = (_match) => {
    setComputer(computer + _match);
    setMatches(matches - _match);
  };

  const whoWin = () => { // check who win

    Alert.alert( player%2 == 0 ? "Win Player" : "Win Computer")
    startGame();
  };

  useEffect( ()=>{ 
    if (matches == 0)
      whoWin();
    else !isPlayer ? computerTurn() : null ; // if nobody won it`s computer`s turn
  },[matches,isPlayer,computer,player]);

  const [player, setPlayer] = useState(0);

  const [computer, setComputer] = useState(0); 

  const getOneMarches = () => { //player takes 1 match
    playerGetMarches(1);
  };

  const getTwoMarches = () => { //player take 2 matches
    playerGetMarches(2);
  };

  const getThreeMarches = () => { //player takes 3 matches
    playerGetMarches(3);
  };

  const playerGetMarches = (_match) => { //player takes 3 matches
    if (matches-_match < 0) // check amount of matches
    {
      Alert.alert("Matches less then "+String(_match))
    }
    else{
      setIsPlayer(false);
      setMatches(matches-_match);
      setPlayer(player+_match);
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
