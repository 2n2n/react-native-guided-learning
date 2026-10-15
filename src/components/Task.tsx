import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

export type TaskType = {
  title: string;
  id: number;
  assignedTo?: string;
  status: "open" | "closed";
};

type TaskProps = TaskType & { children?: React.ReactNode };

export default function Task(props: TaskProps) {
  const router = useRouter();
  return (
    <Pressable
      onPress={() =>
        router.push({ pathname: `/tasks/[id]`, params: { id: props.id } })
      }
    >
      <View style={styles.container}>
        <Text>Task# {props.id}</Text>
        <Text>{props.title}</Text>
        <Text>{props.status}</Text>
        {props.children}
      </View>
    </Pressable>
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
