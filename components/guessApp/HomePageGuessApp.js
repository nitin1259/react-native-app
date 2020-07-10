import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

export default function HomePageGuessApp() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

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
