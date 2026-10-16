import { View, Text } from "react-native";
import { useContext } from "react";
import { TaskContext } from "@/app/tasks";

export default function TaskStatistics() {
  const tasks = useContext(TaskContext);
  const open = tasks.filter((task) => task.status === "open").length;
  const closed = tasks.filter((task) => task.status === "closed").length;
  return (
    <View>
      <Text>Open: {open}</Text>
      <Text>Closed: {closed}</Text>
    </View>
  );
}
