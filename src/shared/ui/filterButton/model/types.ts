export type FilterProps<T> = {
    currentFilter: T;
    options: T[];
    onFilter: (filter: T) => void;
}