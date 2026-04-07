import { object, string, email } from "zod";

export const schema = object({
  email: email("Некорректный email"),
  password: string("Введите пароль"),
});
