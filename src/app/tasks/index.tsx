import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useTasks from "@/hooks/useTasks";
import TaskListContainer from "@/components/TaskListContainer";
import TaskStatistics from "@/components/TaskStatistics";
import { createContext } from "react";
import { TaskType } from "@/components/Task";

export default function Tasks() {
  const insets = useSafeAreaInsets();

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
      <TaskListContainer />
      <TaskStatistics />
    </View>
  );
}
