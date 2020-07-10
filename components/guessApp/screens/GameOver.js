import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GameOver = () => {
  return (
    <View style={styles.screen}>
      <Text>Game is Over!!</Text>
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
