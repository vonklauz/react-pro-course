export type ConfirmDialogProps = {
  title: string;
  description: string;
  action: (response: Promise<unknown>) => any;
};
