import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game is Over!!</Text>
      <Text>Total Number of Guess: {props.gameRounds}</Text>
      <Text>Number to guessed: {props.userNumber} </Text>
      <Button title="NEW GAME" onPress={props.onReset} />
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
