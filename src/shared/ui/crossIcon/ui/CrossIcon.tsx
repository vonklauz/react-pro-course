import type { FC } from "react";
import type { CrossIconProps } from "../model/types";

export const CrossIcon: FC<CrossIconProps> = ({ onClick }) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className="cursor-pointer"
    >
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
