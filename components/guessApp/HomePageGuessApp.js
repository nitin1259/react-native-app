import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";

export default function HomePageGuessApp() {
  return (
    <View style={styles.screen}>
      <Header title={"Guess a Number"} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
