import { useFieldArray, useForm } from "react-hook-form";
import type { RhfFormData } from "../model/types";
import { schema } from "../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormWrapper } from "entities/formWrapper";
import { Button } from "shared/ui/button";
import { Input } from "shared/ui/input";
import { CrossIcon } from "shared/ui/crossIcon";

export const RhfForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RhfFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      socials: [],
    },
  });

  const onSubmit = (data: RhfFormData) => {
    console.log("Submit на RHF форме", { data });
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "socials",
  });

  return (
    <div className="w-[100%] max-w-[400px]">
      <FormWrapper onSubmit={handleSubmit(onSubmit)} title="Форма на React Hook Form">
        <Input label="Имя" placeholder="Введите имя" {...register("name")} error={errors?.name?.message} />
        <Input
          label="Email"
          placeholder="Введите email"
          {...register("email")}
          error={errors?.email?.message}
        />
        <Input
          label="Пароль"
          placeholder="Введите пароль"
          type="password"
          {...register("password")}
          error={errors?.password?.message}
        />
        <Input
          label="Подтвердить пароль"
          placeholder="Подтвердить пароль"
          type="password"
          {...register("confirmPassword")}
          error={errors?.confirmPassword?.message}
        />
        {fields.map(({ id }, index) => (
          <div key={id} className="flex">
            <div className="w-[100%]">
              <Input
                {...register(`socials.${index}.url`)}
                label="URL социальной сети"
                placeholder="https://example.com"
                error={errors?.socials && errors.socials[index]?.url?.message}
              />
            </div>
            <CrossIcon onClick={() => remove(index)} />
          </div>
        ))}
        {fields.length < 4 && (
          <Button
            text="Добавить социальную сеть"
            type="button"
            className="bg-emerald-300 text-[12px] mb-[12px]"
            onClick={() => append({ url: "" })}
          />
        )}
        <Button text="Отправить" type="submit" className="w-[100%] bg-blue-500" />
      </FormWrapper>
    </div>
  );
};
