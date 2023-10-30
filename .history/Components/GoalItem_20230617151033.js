import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";
const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed})=>}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  pressedItem:{

  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
