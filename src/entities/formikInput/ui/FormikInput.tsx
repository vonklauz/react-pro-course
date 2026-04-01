import { useField } from "formik";
import { Input } from "shared/ui/input";
import type { FormikInputProps } from "../model/types";
import type { FC } from "react";

export const FormikInput: FC<FormikInputProps> = (props) => {
  const [field, meta] = useField(props);
  return <Input {...field} {...props} error={meta?.touched ? meta?.error : undefined} />;
};
