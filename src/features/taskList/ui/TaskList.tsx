import { TaskCard } from "entities/task";
import { FilterButton } from "shared/ui/filterButton";
import styles from "./TaskList.module.css";
import { useTasks } from "../model/useTasks";
import type { Filter } from "../model/types";
import { FILTER_OPTIONS } from "../model/consts";

export const TaskList = () => {
  const { tasks, filter, setFilter, removeTask } = useTasks();

  const handleFilterChange = (newFilter: Filter) => {
    setFilter(newFilter);
  };

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
