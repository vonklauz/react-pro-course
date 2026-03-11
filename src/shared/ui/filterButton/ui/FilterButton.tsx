import { memo, type JSX } from "react";
import type { FilterProps } from "../model/types";
import styles from "./FilterButton.module.css";

const FilterButtonComponent = <T extends string>({ options, currentFilter, onFilter }: FilterProps<T>) => (
  <div>
    <span>Фильтр</span>
    <select className={styles.select} value={currentFilter} onChange={(e) => onFilter(e.target.value as T)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export const FilterButton = memo(FilterButtonComponent) as <T extends string>(
  props: FilterProps<T>,
) => JSX.Element;
