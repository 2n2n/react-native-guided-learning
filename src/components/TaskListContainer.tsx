import { View } from "react-native";
import TaskListCounter from "./TaskListCounter";
import TaskList from "./TaskList";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TaskType } from "./Task";

export default function TaskListContainer({ tasks }: { tasks: TaskType[] }) {
  const insets = useSafeAreaInsets();

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
