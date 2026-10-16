import { TaskType } from "@/components/Task";
import useTasks from "@/hooks/useTasks";
import { createContext } from "react";
export const TaskContext = createContext<TaskType[]>([]);

export function TaskContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { tasks } = useTasks();

  return <TaskContext.Provider value={tasks}>{children}</TaskContext.Provider>;
}
