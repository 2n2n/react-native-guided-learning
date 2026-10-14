import { View, Text, StyleSheet, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TaskDescription from "./TaskDescription";
const ComponentWithInsets = ({ onSelect }: { onSelect: () => void }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <View style={[styles.content1, styles.centralized]}>
        <Text>Content1</Text>
        <TaskDescription description="This is a task description" />
        <Pressable onPress={onSelect}>
          <Text>Open</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "red",
    justifyContent: "space-between",
  },
  content1: {
    backgroundColor: "yellow",
    height: 100,
    width: 100,
  },
  content2: {
    backgroundColor: "green",
    height: 100,
    width: 100,
  },
  centralized: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ComponentWithInsets;
