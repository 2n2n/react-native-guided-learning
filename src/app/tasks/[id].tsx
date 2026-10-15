import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function NewTask() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>New Task #{id}</Text>
    </View>
  );
}
