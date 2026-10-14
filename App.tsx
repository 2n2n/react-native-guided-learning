import { SafeAreaProvider } from "react-native-safe-area-context";
import { TaskType } from "./src/components/Task";
import TaskList from "./src/components/TaskList";

const data: TaskType[] = [
  { id: 101, title: "Task 1", status: "open" },
  { id: 102, title: "Task 2", status: "open" },
  { id: 103, title: "Task 3", status: "open" },
  { id: 104, title: "Task 4", status: "open" },
  { id: 105, title: "Task 5", status: "open" },
  { id: 106, title: "Task 6", status: "open" },
  { id: 107, title: "Task 7", status: "open" },
  { id: 108, title: "Task 8", status: "open" },
  { id: 109, title: "Task 9", status: "open" },
  { id: 110, title: "Task 10", status: "open" },
  { id: 111, title: "Task 11", status: "open" },
  { id: 112, title: "Task 12", status: "open" },
  { id: 113, title: "Task 13", status: "open" },
  { id: 114, title: "Task 14", status: "closed" },
  { id: 115, title: "Task 15", status: "closed" },
  { id: 116, title: "Task 16", status: "open" },
  { id: 117, title: "Task 17", status: "open" },
  { id: 118, title: "Task 18", status: "open" },
  { id: 119, title: "Task 19", status: "open" },
  { id: 120, title: "Task 20", status: "open" },
];

export default function App() {
  return (
    <SafeAreaProvider>
      <TaskList data={data} />
    </SafeAreaProvider>
  );
}
