import { FormWrapper } from "entities/formWrapper";
import { useActionState, useState } from "react";
import { Button } from "shared/ui/button";
import type { NativeFormData } from "../model/types";
import { Input } from "shared/ui/input";

export const NativeForm = () => {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Partial<NativeFormData> | null>(null);
  const [isSubmited, setIsSubmited] = useState(false);

  const handleFormAction = async (_: NativeFormData, formData: FormData) => {
    const dataForValidation = {
      email: formData.get("email") as string,
      isConfirmSubscription: formData.get("isConfirmSubscription") as string,
    };
    const isValid = validate(dataForValidation);

    if (isValid) {
      await new Promise((resolve) => setTimeout(resolve, 1500)).finally(() => setIsSubmited(true));
    }

    return dataForValidation;
  };

  const validate = (formData: NativeFormData) => {
    if (step === 0) {
      if (!formData.email) {
        setErrors({ email: "Укажите email" });
        return false;
      } else {
        setStep(1);
        setErrors(null);
      }
    } else if (step === 1) {
      if (!formData.isConfirmSubscription) {
        setErrors({ isConfirmSubscription: "Подтвердите подписку" });
        return false;
      } else {
        setErrors(null);
        return true;
      }
    }
  };

  const [actionState, action, isPending] = useActionState(handleFormAction, {
    email: "",
    isConfirmSubscription: "false",
  });

  return (
    <div className="w-[100%] max-w-[400px]">
      <FormWrapper action={action} title="Форма на нативном React 19">
        {step === 0 && (
          <>
            <Input
              name="email"
              type="email"
              label="Email"
              placeholder="Введите email"
              error={errors?.email}
              defaultValue={actionState.email}
            />
          </>
        )}
        {step === 1 && (
          <>
            <Input
              name="isConfirmSubscription"
              type="checkbox"
              label="Даю согласие на подписку"
              error={errors?.isConfirmSubscription}
              defaultValue={actionState.isConfirmSubscription}
            />
          </>
        )}
        {!isPending ? (
          <Button text={step === 1 ? "Отправить" : "Далее"} type="submit" className="w-[100%] bg-blue-500" />
        ) : (
          <p>Отправка формы...</p>
        )}
        {isSubmited && <p className="text-green-500 text-center mt-[4px]">Форма успешно отправлена!</p>}
      </FormWrapper>
    </div>
  );
};
