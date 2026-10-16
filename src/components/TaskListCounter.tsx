import { View, Text } from "react-native";

export default function TaskListCounter({ count }: { count: number }) {
  return (
    <View>
      <Text>Task count: {count}</Text>
    </View>
  );
}
