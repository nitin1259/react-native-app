import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Card from "../Card";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>Start a New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput placeholder="Enter a number" />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Start" onPress={() => {}} />
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  titleText: {
    fontSize: 22,
    marginVertical: 20,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
