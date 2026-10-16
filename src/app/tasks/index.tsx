import TaskList from "@/components/TaskList";
import TaskListCounter from "@/components/TaskListCounter";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useTasks from "@/hooks/useTasks";
import TaskListContainer from "@/components/TaskListContainer";
import TaskStatistics from "@/components/TaskStatistics";

export default function Tasks() {
  const insets = useSafeAreaInsets();
  const { tasks } = useTasks();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: insets.left,
        paddingRight: insets.right,
        flex: 1,
      }}
    >
      <TaskListContainer tasks={tasks} />
      <TaskStatistics tasks={tasks} />
    </View>
  );
}
