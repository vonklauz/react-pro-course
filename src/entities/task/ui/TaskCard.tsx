import styles from "./TaskCard.module.css";
import type { Task } from "../model/types";
import { memo } from "react";

export const TaskCard = memo(({ id, title, completed, removeTask }: Task) => {
  return (
    <div className={`${styles.taskWrapper} p-4 bg-white rounded shadow`} key={id}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {completed ? (
        <p className="text-green-500">Completed</p>
      ) : (
        <p className="text-red-500">Not Completed</p>
      )}
      {removeTask && (
        <button className="mt-3 underline cursor-pointer text-sm" onClick={() => removeTask(id)}>
          Удалить
        </button>
      )}
    </div>
  );
});
