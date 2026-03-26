import type { ChangeEvent } from "react";

export type InputProps = {
  name: string;
  label: string;
  error?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
};
