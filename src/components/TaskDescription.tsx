import { View, Text } from "react-native";

export default function TaskDescription(props: { description: string }) {
  return (
    <View>
      <Text>{props.description}</Text>
    </View>
  );
}
