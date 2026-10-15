import { TaskType } from "@/components/Task";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { fetch } from "expo/fetch";

export default function NewTask() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [task, setTask] = useState<TaskType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => response.json())
        .then((json) => setTask(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, 1000);
  }, [id]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>New Task #{id}</Text>
      <Text>{JSON.stringify(task)}</Text>
    </View>
  );
}
