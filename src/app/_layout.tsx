import { TaskContextProvider } from "@/contexts/task-context";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <TaskContextProvider>
      <Stack />
    </TaskContextProvider>
  );
}
