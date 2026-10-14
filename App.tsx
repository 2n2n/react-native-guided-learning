import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ComponentWithInsets from "./src/components/ComponentWithInsets";
import Task from "./src/components/Task";
import TaskDescription from "./src/components/TaskDescription";

export default function App() {
  return (
    <SafeAreaProvider>
      <ComponentWithInsets onSelect={() => console.log("open")} />

      {Array.from({ length: 5 }).map((_, index) => (
        <Task
          key={`task-${index + 1}`}
          title={`Task ${index + 1}`}
          status="open"
          assignedTo="John Doe"
          id={index + 1}
        >
          <TaskDescription description="This is a task description" />
        </Task>
      ))}
    </SafeAreaProvider>
  );
}
