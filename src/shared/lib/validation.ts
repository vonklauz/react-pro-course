import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Введите имя"),
  email: yup.string().email("Неверный email").required("Email обязателен"),
  password: yup.string().min(6, "Пароль должен быть не менее 6 символов").required("Пароль обязателен"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли должны совпадать")
    .required("Подтверждение пароля обязательно"),
  socials: yup.array().of(
    yup
      .object()
      .shape({
        url: yup.string().url("Неверный URL").required("URL обязателен"),
      })
      .nullable(),
  ),
});
