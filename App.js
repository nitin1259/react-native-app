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

export default function App() {
  const [inputGoal, setInputGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const inputChangeHandler = (enteredGoal) => {
    setInputGoal(enteredGoal);
  };

  const addGoalHandler = () => {
    // console.log(inputGoal);
    setCourseGoals((courseGoals) => [
      ...courseGoals,
      { key: Math.random().toString(), value: inputGoal },
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
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
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
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 3,
  },
});

// add some styling to the view
