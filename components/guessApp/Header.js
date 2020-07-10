import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}> {props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    fontSize: 18,
    color: "white",
  },
});

export default Header;
