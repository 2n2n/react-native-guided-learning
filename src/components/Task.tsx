import { View, Text, StyleSheet } from "react-native";

type TaskProps = {
  title: string;
  id: number;
  assignedTo?: string;
  status: "open" | "closed";
} & { children: React.ReactNode };

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
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#BA9E99",
    marginVertical: 5,
  },
});
