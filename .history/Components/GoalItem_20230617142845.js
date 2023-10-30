import { StyleSheet } from "react-native";
import { View, Text ,Touchable} from "react-native";
const GoalItem = (props) => {
  return (
    <View style={styles.goalItem} onClick={}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
