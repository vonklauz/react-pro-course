import type { FC } from "react";
import type { InputProps } from "../model/types";

export const Input: FC<InputProps> = ({ name, label, error, type, placeholder, onChange, ...props }) => {
  return (
    <div className="mb-[12px]">
      <label className="mb-[4px] block" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        className="w-[100%] p-[8px] border border-gray-300 rounded"
        {...props}
      />
      {error && <div className="text-red-500 text-sm mt-[4px]">{error}</div>}
    </div>
  );
};
