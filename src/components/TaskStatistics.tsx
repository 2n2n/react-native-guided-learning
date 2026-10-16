import { View, Text } from "react-native";
import { TaskType } from "./Task";

export default function TaskStatistics({ tasks }: { tasks: TaskType[] }) {
  const open = tasks.filter((task) => task.status === "open").length;
  const closed = tasks.filter((task) => task.status === "closed").length;
  return (
    <View>
      <Text>Open: {open}</Text>
      <Text>Closed: {closed}</Text>
    </View>
  );
}
