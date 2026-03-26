export type FormWrapperProps = {
  title: string;
  action?: (formData: FormData) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
};
