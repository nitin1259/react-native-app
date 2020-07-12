import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import TextTitle from "../../common/TextTitle";
import TextWrapper from "../../common/TextWrapper";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <TextTitle>Game is Over!!</TextTitle>
      <TextWrapper>Total Number of Guess: {props.gameRounds}</TextWrapper>
      <TextWrapper>Number to guessed: {props.userNumber} </TextWrapper>
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
