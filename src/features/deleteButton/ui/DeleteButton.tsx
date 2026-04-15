import { useState } from "react";
import { Button } from "shared/ui/button";
import { ConfirmDialog } from "shared/ui/confirmDialog";

export const DeleteButton = () => {
  const [isShowDialog, setIsShowDialog] = useState(false);

  const handleConfirm = async (response: Promise<unknown>) => {
    const rs = await response;
    if (rs === true) {
      console.log("Элемент удалён");
    } else {
      console.log("Удаление отменено пользователем");
    }
    setIsShowDialog(false);
  };

  return (
    <>
      <Button className="bg-red-500" text="Удалить" onClick={() => setIsShowDialog(true)} />
      {isShowDialog && (
        <ConfirmDialog
          title="Удаление элемента"
          description="Вы уверены, что хотите удалить элемент?"
          action={handleConfirm}
        />
      )}
    </>
  );
};
