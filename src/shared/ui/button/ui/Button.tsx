import type { FC } from "react";
import type { ButtonProps } from "../model/types";

export const Button: FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  type = "button",
  className = "",
}) => {
  return (
    <button
      onClick={onClick && !disabled ? onClick : undefined}
      disabled={disabled}
      type={type}
      className={`text-white px-4 py-2 rounded cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};
