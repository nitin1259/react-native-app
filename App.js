import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/goals/GoalItem";

export default function App() {
  const [inputGoal, setInputGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const inputChangeHandler = (enteredGoal) => {
    setInputGoal(enteredGoal);
  };

  const addGoalHandler = () => {
    console.log(inputGoal);
    setCourseGoals((courseGoals) => [
      ...courseGoals,
      { id: Math.random().toString(), value: inputGoal },
    ]);
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
      {
        // this will give warning her as we dont have any key here and for that it expect certain format of data with key
      }
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
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
