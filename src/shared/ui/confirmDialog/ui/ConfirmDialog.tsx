import { useState, type FC } from "react";
import { createPortal } from "react-dom";
import { Button } from "shared/ui/button";
import styles from "./ConfirmDialog.module.css";
import type { ConfirmDialogProps } from "../model/types";

export const ConfirmDialog: FC<ConfirmDialogProps> = ({ title, description, action }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const dialogContainer = document.getElementById("dialogContainer");

  const handleButtonClick = (value: boolean) => {
    if (value) {
      setIsDeleting(true);
    }
    const response = new Promise((resolve) => {
      setTimeout(
        () => {
          setIsDeleting(false);
          resolve(value);
        },
        value ? 1000 : 0,
      );
    });
    action(response);
  };

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <h1 className="text-center">{title}</h1>
        <p className="text-center">{description}</p>
        <div className="flex justify-between mt-4">
          <Button
            className="bg-green-500"
            text="Подтвердить"
            onClick={() => !isDeleting && handleButtonClick(true)}
          />
          <Button
            className="bg-gray-500"
            text="Отмена"
            onClick={() => !isDeleting && handleButtonClick(false)}
          />
        </div>
        {isDeleting && <p className="text-center mt-4">Удаление элемента...</p>}
      </div>
    </div>,
    dialogContainer!,
  );
};
