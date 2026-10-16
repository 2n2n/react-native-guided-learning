import TaskList from "@/components/TaskList";
import TaskListCounter from "@/components/TaskListCounter";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useTasks from "@/hooks/useTasks";

export default function Tasks() {
  const insets = useSafeAreaInsets();
  const { tasks } = useTasks();

  return (
    <View
      style={{
        flexDirection: "column",
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
