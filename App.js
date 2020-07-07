import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [inputGoal, setInputGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const inputChangeHandler = (enteredGoal) => {
    setInputGoal(enteredGoal);
  };

  const addGoalHandler = () => {
    // console.log(inputGoal);
    setCourseGoals((courseGoals) => [...courseGoals, inputGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={inputChangeHandler}
          value={inputGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map((goal, i) => (
          <Text key={i}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
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

// add some styling to the view
