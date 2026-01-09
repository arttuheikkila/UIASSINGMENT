import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function TodoItem({ todo, removeTodo }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{todo.text}</Text>
      <Button title="Poista" color="red" onPress={() => removeTodo(todo.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
