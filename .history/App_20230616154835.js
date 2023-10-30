import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState();
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals([...courseGoals, setCourseGoals]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        ></TextInput>
        <Button title="Add goals" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals ...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 4,
  },
});
