import type { Task } from "entities/task";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Filter } from "./types";
import { useGetTasksQuery } from "../api/tasksApi";

export const useTasks = (): {
  tasks: Task[];
  filter: Filter;
  isLoading: boolean;
  setFilter: (f: Filter) => void;
  removeTask: (id: string) => void;
} => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const { data, isLoading } = useGetTasksQuery();

  useEffect(() => {
    if (data && tasks.length === 0) {
      setTasks(data);
    }
  }, [data]);

  const removeTask = useCallback(
    (id: string) => {
      const newTasks = [...tasks];
      setTasks(newTasks.filter((task) => task.id !== id));
    },
    [tasks],
  );

  const getFilteredTasks = useMemo(() => {
    if (filter === "all") {
      return tasks;
    }

    return tasks.filter((task) => (filter === "completed" ? task.completed : !task.completed));
  }, [filter, tasks]);

  return {
    tasks: getFilteredTasks,
    filter,
    isLoading,
    setFilter,
    removeTask,
  };
};
