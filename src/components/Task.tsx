import { View, Text, StyleSheet } from "react-native";

export type TaskType = {
  title: string;
  id: number;
  assignedTo?: string;
  status: "open" | "closed";
};

type TaskProps = TaskType & { children?: React.ReactNode };

export default function Task(props: TaskProps) {
  return (
    <View style={styles.container}>
      <Text>Task# {props.id}</Text>
      <Text>{props.title}</Text>
      <Text>{props.status}</Text>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "99%",
    alignSelf: "center",
    marginVertical: 2,
    padding: 5,
    borderRadius: 5,
  },
});
