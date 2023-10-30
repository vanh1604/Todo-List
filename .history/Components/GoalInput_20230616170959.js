import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState();
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler(enteredGoalText) {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
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
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
export default GoalInput;
