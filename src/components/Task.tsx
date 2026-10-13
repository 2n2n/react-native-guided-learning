import { View, Text } from "react-native";

type TaskProps = {
  title: string;
  id: number;
  status: "open" | "closed";
} & { children: React.ReactNode };

export default function Task(props: TaskProps) {
  return (
    <View>
      <Text>Task# {props.id}</Text>
      <Text>{props.title}</Text>
      {props.children}
      <Text>{props.status}</Text>
    </View>
  );
}
