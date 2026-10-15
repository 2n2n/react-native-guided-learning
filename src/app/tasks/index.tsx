import TaskList from "@/components/TaskList";
import { useRouter } from "expo-router";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Tasks() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Text style={styles.backButton}>{`<- Go back`}</Text>
        </Pressable>
        <Text style={styles.title}>MY TASKS</Text>
      </View>
      <TaskList />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
  },
  backButton: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
  },
});
