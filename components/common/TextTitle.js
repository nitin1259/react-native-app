import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TextTitle = (props) => {
  return (
    <Text style={{ ...styles.textStyle, ...props.style }}>
      {props.children}
    </Text>
  );
};

export default TextTitle;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
  },
});
