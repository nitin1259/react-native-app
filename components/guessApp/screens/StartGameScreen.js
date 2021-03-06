import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../Card";
import Colors from "../../../constants/Colors";
import Input from "../Input";
import NumberContainer from "../NumberContainer";
import TextWrapper from "../../common/TextWrapper";
import TextTitle from "../../common/TextTitle";
import ButtonWrapper from "../../common/ButtonWrapper";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    // console.log(enteredValue);
    const chosenNumber = parseInt(enteredValue);
    if (!chosenNumber || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number is valid only between 1 to 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };

  let confirmOutput;

  if (confirmed) {
    confirmOutput = (
      <Card style={styles.selectedNumStyle}>
        <TextTitle>Selected Number</TextTitle>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <ButtonWrapper onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </ButtonWrapper>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <TextWrapper style={styles.titleText}>Start a New Game</TextWrapper>
        <Card style={styles.inputContainer}>
          <TextWrapper>Select a Number</TextWrapper>
          <Input
            style={styles.inputStyle}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonStyle}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.buttonStyle}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
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
    fontFamily: "open-sans-bold",
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
  selectedNumStyle: {
    marginTop: 20,
    alignItems: "center",
  },
  boldTextStyle: {
    fontFamily: "open-sans-bold",
  },
});
