import { useState } from "react";
import { View, FlatList, Text } from "react-native";
import Task, { TaskType } from "./Task";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RadioButtonGroup from "./RadioButtonGroup";
import AddTaskField from "./AddTaskField";
import AddTaskDescriptionField from "./AddTaskDescriptionField";

const labels: string[] = ["All", "Open", "Closed"];

export type TaskAPIResponseType = {
  id: number;
  title: string;
  completed: boolean;
  userId?: number;
};

// const generateTaskId = (tasks: TaskType[]) => {
//   return (tasks.findLast((task) => task.id)?.id ?? 0) + 1;
// };

export default function TaskList({ tasks }: { tasks: TaskType[] }) {
  const insets = useSafeAreaInsets();

  const [activeLabel, setActiveLabel] = useState<string | null>(
    labels[0] ?? null,
  );

  const list = tasks.filter((task) => {
    if (activeLabel === "All") {
      return true;
    }
    return task.status.toLowerCase() === activeLabel?.toLowerCase();
  });

  const renderRow = ({ item }: { item: TaskType }) => <Task {...item} />;

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <AddTaskField
        onAddTask={(title) => {
          // setTasks((previousState) => {
          //   return [
          //     ...previousState,
          //     {
          //       id: generateTaskId(previousState),
          //       title: title,
          //       status: (activeLabel?.toLocaleLowerCase() === "closed"
          //         ? activeLabel?.toLowerCase()
          //         : "open") as "open" | "closed",
          //     },
          //   ];
          // });
        }}
      />
      <AddTaskDescriptionField onAddTask={(description) => {}} />
      <RadioButtonGroup
        labels={labels}
        onSelect={(label) => setActiveLabel(label)}
        activeLabel={activeLabel}
      />
      <FlatList
        style={{ flex: 1 }}
        data={list}
        renderItem={renderRow}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          justifyContent: list.length > 0 ? "flex-start" : "center",
        }}
        ListEmptyComponent={
          <Text
            style={{
              textAlign: "center",
              color: "gray",
            }}
          >
            No tasks yet.
          </Text>
        }
      />
    </View>
  );
}
