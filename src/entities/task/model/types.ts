export interface Task {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskCardProps extends Task {
  removeTask?: (id: string) => void;
}
