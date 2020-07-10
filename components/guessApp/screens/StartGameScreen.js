import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Card from "../Card";
import Colors from "../../../constants/colors";
import Input from "../Input";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>Start a New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={styles.inputStyle}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button title="Reset" onPress={() => {}} color={Colors.accent} />
          </View>
          <View style={styles.buttonStyle}>
            <Button title="Confirm" onPress={() => {}} color={Colors.primary} />
          </View>
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
  buttonStyle: {
    width: 100,
  },
  inputStyle: {
    width: 50,
    textAlign: "center",
  },
});