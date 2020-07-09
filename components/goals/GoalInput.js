import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = (props) => {
  const [inputGoal, setInputGoal] = useState("");

  const inputChangeHandler = (enteredGoal) => {
    setInputGoal(enteredGoal);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={inputChangeHandler}
        value={inputGoal}
      />
      <Button title="ADD" onPress={props.goalHandler.bind(this, inputGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
});

export default GoalInput;
