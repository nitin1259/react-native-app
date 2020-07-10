import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import NumberContainer from "../NumberContainer";
import Card from "../Card";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  const [totalRound, setTotalRound] = useState(0);
  const currentLower = useRef(1);
  const currentHigher = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(totalRound);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGeneratedHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "higher" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "I know this is the wrong select!!!", [
        { text: "Try Again", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigher.current = currentGuess;
    } else {
      currentLower.current = currentGuess;
    }

    const nextNum = generateRandomBetween(
      currentLower.current,
      currentHigher.current,
      currentGuess
    );

    setCurrentGuess(nextNum);
    setTotalRound((curRound) => curRound + 1);
  };
  return (
    <View style={styles.screen}>
      <Text>Guess Number</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="LESSER"
          onPress={nextGeneratedHandler.bind(this, "lower")}
        />
        <Button
          title="GREATER"
          onPress={nextGeneratedHandler.bind(this, "higher")}
        />
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});
