import { object, string, email, array, url } from "zod";

export const schema = object({
  name: string("Введите имя").trim().nonempty("Введите имя"),
  email: email("Неверный email"),
  password: string("Введите пароль").min(6, "Пароль должен быть не менее 6 символов"),
  confirmPassword: string("Подтверждение пароля обязательно").nonempty("Подтверждение пароля обязательно"),
  socials: array(
    object({
      url: url("Введите корректный URL").nonempty("URL обязателен"),
    }),
  ).nullable(),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
  message: "Пароли должны совпадать",
  path: ["confirmPassword"],
});
