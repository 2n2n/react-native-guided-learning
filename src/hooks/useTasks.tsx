import { TaskType } from "@/components/Task";
import { db } from "@/libs/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useTasks() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    // initial load of the list from firebase
    getDocs(collection(db, "Tasks")).then((snapshot) => {
      let _tasks: TaskType[] = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() } as unknown as TaskType;
      });
      setTasks(_tasks);
    });
  }, []);

  // listen to task collection changes.
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Tasks"), (snapshot) => {
      let _tasks: TaskType[] = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() } as unknown as TaskType;
      });
      setTasks(_tasks);
    });
    return () => unsubscribe();
  }, []);

  return { tasks };
}
