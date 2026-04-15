import type { FC } from "react";
import { createPortal } from "react-dom";
import type { TooltipProps } from "../model/model";
import styles from "./Tooltip.module.css";

export const Tooltip: FC<TooltipProps> = ({ content, position = "top", className }) => {
  return createPortal(
    <div
      className={`${styles.tooltip} ${className || ""} ${styles[position]}`}
      onClick={(e) => e.stopPropagation()}
    >
      {content}
    </div>,
    document.getElementById("tooltipContainer")!,
  );
};
