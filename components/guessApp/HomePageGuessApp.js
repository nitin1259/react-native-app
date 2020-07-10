import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import StartGameScreen from "./screens/StartGameScreen";

export default function HomePageGuessApp() {
  return (
    <View style={styles.screen}>
      <Header title={"Guess a Number"} />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
