import { TaskCard } from "entities/task";
import { FilterButton } from "shared/ui/filterButton";
import styles from "./TaskList.module.css";
import { useTasks } from "../model/useTasks";
import type { Filter } from "../model/types";
import { FILTER_OPTIONS } from "../model/consts";
import { useCallback } from "react";

export const TaskList = () => {
  const { tasks, filter, setFilter, removeTask } = useTasks();

  const handleFilterChange = useCallback((newFilter: Filter) => {
    setFilter(newFilter);
  }, []);

  return (
    <div>
      <FilterButton currentFilter={filter} options={FILTER_OPTIONS} onFilter={handleFilterChange} />
      <ul>
        {tasks?.map((task) => (
          <li className={styles.listItem} key={task.id}>
            <TaskCard removeTask={removeTask} {...task} />
          </li>
        ))}
      </ul>
    </div>
  );
};
