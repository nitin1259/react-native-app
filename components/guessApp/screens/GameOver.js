import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import TextTitle from "../../common/TextTitle";
import TextWrapper from "../../common/TextWrapper";
import Colors from "../../../constants/Colors";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <TextTitle>Game is Over!!</TextTitle>
      <View style={styles.imageContainer}>
        <Image
          // source={require("./../../../assets/success.png")}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg",
          }}
          style={styles.imageStyle}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <TextWrapper style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.textHighlight}>{props.gameRounds}</Text> round to
          guess the nubmer{" "}
          <Text style={styles.textHighlight}>{props.userNumber}</Text>
        </TextWrapper>
      </View>
      <Button title="NEW GAME" onPress={props.onReset} />
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
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  textHighlight: {
    color: Colors.accent,
    fontFamily: "open-sans-bold",
  },
});
