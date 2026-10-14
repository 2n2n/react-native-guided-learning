import { useState } from "react";
import { View, FlatList, Text } from "react-native";
import Task, { TaskType } from "./Task";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RadioButtonGroup from "./RadioButtonGroup";
import AddTaskField from "./AddTaskField";

const labels: string[] = ["All", "Open", "Closed"];

const data: TaskType[] = [
  { id: 101, title: "Task 1", status: "open" },
  { id: 102, title: "Task 2", status: "open" },
  { id: 103, title: "Task 3", status: "open" },
  { id: 104, title: "Task 4", status: "open" },
  { id: 105, title: "Task 5", status: "open" },
  { id: 106, title: "Task 6", status: "open" },
  { id: 107, title: "Task 7", status: "open" },
  { id: 108, title: "Task 8", status: "open" },
  { id: 109, title: "Task 9", status: "open" },
  { id: 110, title: "Task 10", status: "open" },
  { id: 111, title: "Task 11", status: "open" },
  { id: 112, title: "Task 12", status: "open" },
  { id: 113, title: "Task 13", status: "open" },
  { id: 114, title: "Task 14", status: "closed" },
  { id: 115, title: "Task 15", status: "closed" },
  { id: 116, title: "Task 16", status: "open" },
  { id: 117, title: "Task 17", status: "open" },
  { id: 118, title: "Task 18", status: "open" },
  { id: 119, title: "Task 19", status: "open" },
  { id: 120, title: "Task 20", status: "open" },
];

const generateTaskId = (tasks: TaskType[]) => {
  return (tasks.findLast((task) => task.id)?.id ?? 0) + 1;
};

export default function TaskList() {
  const insets = useSafeAreaInsets();

  const [activeLabel, setActiveLabel] = useState<string | null>(
    labels[0] ?? null,
  );

  const [tasks, setTasks] = useState<TaskType[]>(data);

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
          setTasks([
            ...tasks,
            { id: generateTaskId(tasks), title: title, status: "open" },
          ]);
        }}
      />
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
          justifyContent: data.length > 0 ? "flex-start" : "center",
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
