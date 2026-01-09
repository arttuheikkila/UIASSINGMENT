import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { text: input, id: Date.now() }]);
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Muistilista</Text>

      <View style={styles.inputSection}>
        <TextInput
          style={styles.input}
          placeholder="Kirjoita tehtävä..."
          value={input}
          onChangeText={setInput}
        />
        <Button title="Lisää" onPress={addTodo} />
      </View>

      <TodoList todos={todos} removeTodo={removeTodo} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputSection: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 5,
  },
});
