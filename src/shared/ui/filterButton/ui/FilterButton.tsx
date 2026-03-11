import type { FilterProps } from "../model/types";
import styles from './FilterButton.module.css'

export const FilterButton = <T extends string>({
    options,
    currentFilter,
    onFilter,
}: FilterProps<T>) => (
    <div>
        <span>Фильтр</span>
        <select
            className={styles.select}
            value={currentFilter}
            onChange={(e) => onFilter(e.target.value as T)}
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div >
);