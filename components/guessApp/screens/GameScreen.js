import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import NumberContainer from "../NumberContainer";
import Card from "../Card";
import ButtonWrapper from "../../common/ButtonWrapper";
import { Ionicons } from "@expo/vector-icons";
import TextWrapper from "../../common/TextWrapper";

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

const renderListItems = (value, numOfRounds) => (
  <View key={value} style={styles.listItem}>
    <TextWrapper>#{numOfRounds}</TextWrapper>
    <TextWrapper>{value}</TextWrapper>
  </View>
);

const GameScreen = (props) => {
  const initalGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);
  // const [totalRound, setTotalRound] = useState(0);
  const [pastGusesses, setPastGusesses] = useState([initalGuess]);
  const currentLower = useRef(1);
  const currentHigher = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGusesses.length);
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
      currentLower.current = currentGuess + 1;
    }

    const nextNum = generateRandomBetween(
      currentLower.current,
      currentHigher.current,
      currentGuess
    );

    setCurrentGuess(nextNum);
    // setTotalRound((curRound) => curRound + 1);
    setPastGusesses((curPastGuesses) => [nextNum, ...curPastGuesses]);
  };
  return (
    <View style={styles.screen}>
      <Text>Guess Number</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <ButtonWrapper onPress={nextGeneratedHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </ButtonWrapper>
        <ButtonWrapper onPress={nextGeneratedHandler.bind(this, "higher")}>
          <Ionicons name="md-add" size={24} color="white" />
        </ButtonWrapper>
      </Card>
      <View style={styles.listCont}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGusesses.map((guess, index) =>
            renderListItems(guess, pastGusesses.length - index)
          )}
        </ScrollView>
      </View>
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
  listCont: {
    width: "80%",
    flex: 1, // this is for android scroll
  },
  list: {
    flexGrow: 1, // behave correctly for scrollview and flatlist
    alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "black",
    borderWidth: 2,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});
