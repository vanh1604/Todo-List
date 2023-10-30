import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
const GoalInput = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
      ></TextInput>
      <Button title="Add goals" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;
