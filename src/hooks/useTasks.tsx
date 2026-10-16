import { TaskType } from "@/components/Task";
import { TaskAPIResponseType } from "@/components/TaskList";
import { useEffect, useState } from "react";

export default function useTasks() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const _tasks = json.map((_task: TaskAPIResponseType) => ({
          id: _task.id,
          title: _task.title,
          status: _task.completed ? "closed" : "open",
        }));

        setTasks(_tasks);
      })
      .catch((error) => console.error(error));
  }, []);

  return { tasks };
}
