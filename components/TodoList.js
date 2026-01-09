import React from "react";
import { FlatList } from "react-native";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, removeTodo }) {
  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <TodoItem todo={item} removeTodo={removeTodo} />}
    />
  );
}
