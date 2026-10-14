import { SafeAreaProvider } from "react-native-safe-area-context";
import TaskList from "./src/components/TaskList";

export default function App() {
  return (
    <SafeAreaProvider>
      <TaskList />
    </SafeAreaProvider>
  );
}
