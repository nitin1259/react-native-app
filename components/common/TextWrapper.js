import React from "react";
import { StyleSheet, Text } from "react-native";

const TextWrapper = (props) => {
  return (
    <Text style={{ ...styles.textStyle, ...props.style }}>
      {props.children}
    </Text>
  );
};

export default TextWrapper;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "open-sans",
  },
});
