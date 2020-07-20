import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import TextTitle from "../../common/TextTitle";
import TextWrapper from "../../common/TextWrapper";
import Colors from "../../../constants/Colors";
import ButtonWrapper from "../../common/ButtonWrapper";

const GameOver = (props) => {
  return (
    <ScrollView>
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
            <Text style={styles.textHighlight}>{props.gameRounds}</Text> round
            to guess the nubmer{" "}
            <Text style={styles.textHighlight}>{props.userNumber}</Text>
          </TextWrapper>
        </View>
        {/* <Button title="NEW GAME" onPress={props.onReset} /> */}
        <ButtonWrapper onPress={props.onReset}>NEW GAME</ButtonWrapper>
      </View>
    </ScrollView>
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
    width: Dimensions.get("window").width * 0.75,
    height: Dimensions.get("window").width * 0.75,
    borderRadius: (Dimensions.get("window").width * 0.75) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
  textHighlight: {
    color: Colors.accent,
    fontFamily: "open-sans-bold",
  },
});
