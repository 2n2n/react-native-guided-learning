import { View } from "react-native";
import TaskListCounter from "./TaskListCounter";
import TaskList from "./TaskList";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useContext } from "react";
import { TaskContext } from "@/contexts/task-context";

export default function TaskListContainer() {
  const insets = useSafeAreaInsets();
  const tasks = useContext(TaskContext);
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <TaskListCounter count={tasks.length} />
      <TaskList tasks={tasks} />
    </View>
  );
}
