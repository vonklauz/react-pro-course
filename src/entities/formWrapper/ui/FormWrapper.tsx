import type { FC } from "react";
import type { FormWrapperProps } from "../model/types";

export const FormWrapper: FC<FormWrapperProps> = ({ action, onSubmit, children, title }) => {
  return (
    <div className="p-4 border rounded w-[100%]">
      <h3 className="text-center mb-[8px]">{title}</h3>
      <div>
        <form onSubmit={onSubmit} action={action}>
          {children}
        </form>
      </div>
    </div>
  );
};
