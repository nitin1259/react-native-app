import React from "react";
import { StyleSheet, TextInput } from "react-native";
import Colors from "../../constants/Colors";

const Input = (props) => {
  return (
    <TextInput {...props} style={{ ...styles.basicStyle, ...props.style }} />
  );
};

export default Input;

const styles = StyleSheet.create({
  basicStyle: {
    height: 30,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
