import { useState } from "react";
import { View, FlatList, Text } from "react-native";
import Task, { TaskType } from "./Task";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RadioButtonGroup from "./RadioButtonGroup";
import AddTaskField from "./AddTaskField";

type TaskListProps = {
  data: TaskType[];
};
const labels: string[] = ["All", "Open", "Closed"];

export default function TaskList({ data }: TaskListProps) {
  const insets = useSafeAreaInsets();

  const [activeLabel, setActiveLabel] = useState<string | null>(
    labels[0] ?? null,
  );

  const list = data.filter((task) => {
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
      <AddTaskField />
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
          flex: 1,
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
