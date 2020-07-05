import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState(
    "Open up App.js to start working on your app!"
  );
  return (
    <View>
      <View>
        <TextInput />
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}

// add some styling to the view
