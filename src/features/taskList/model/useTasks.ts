import type { Task } from "entities/task";
import { useEffect, useState } from "react";
import type { Filter } from "./types";

const INITIAL_TASKS: Task[] = [
  { id: "1", title: "Task 1", completed: false },
  { id: "2", title: "Task 2", completed: true },
  { id: "3", title: "Task 3", completed: false },
];

export const useTasks = (): {
  tasks: Task[];
  filter: Filter;
  setFilter: (f: Filter) => void;
  removeTask: (id: string) => void;
} => {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [filter, setFilter] = useState<Filter>("all");

  const removeTask = (id: string) => {
    const newTasks = [...tasks];
    setTasks(newTasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    if (filter === "all") {
      setTasks(INITIAL_TASKS);
      return;
    }

    const newTasks = INITIAL_TASKS.filter((task) =>
      filter === "completed" ? task.completed : !task.completed,
    );
    setTasks(newTasks);
  }, [filter]);

  return {
    tasks,
    filter,
    setFilter,
    removeTask,
  };
};
