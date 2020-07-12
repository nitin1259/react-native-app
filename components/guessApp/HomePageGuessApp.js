import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

import * as Font from "expo-font";
import { AppLoading } from "expo";

const renderFont = () => {
  return Font.loadAsync({
    "open-sans": require("../../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../../assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function HomePageGuessApp() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setdataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={renderFont}
        onFinish={() => {
          setdataLoaded(true);
        }}
        onError={(err) => {
          console.log(err);
        }}
      />
    );
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const guessRoundHandler = (totalRound) => {
    setGuessRounds(totalRound);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={guessRoundHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        gameRounds={guessRounds}
        userNumber={userNumber}
        onReset={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title={"Guess a Number"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
