import { useForm } from "react-hook-form";
import { schema } from "../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormWrapper } from "entities/formWrapper";
import { Button } from "shared/ui/button";
import { Input } from "shared/ui/input";
import type { LoginFormData } from "../model/types";
import { useLoginMutation } from "../api/authApi";
import { useEffect } from "react";
import { useAuth } from "shared/features/authRouting";
import { Navigate } from "react-router-dom";

export const LoginForm = () => {
  const [login, resultLogin] = useLoginMutation();
  const { token, setToken } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { data: loginRs, isSuccess, isLoading, error } = resultLogin;

  const onSubmit = (data: LoginFormData) => {
    if (isLoading) return;
    login(data);
  };

  useEffect(() => {
    if (isSuccess && loginRs) {
      const { accessToken = "" } = loginRs || {};
      localStorage.setItem("token", accessToken);
      setToken && setToken(accessToken);
    }
  }, [isSuccess, loginRs]);

  if (token) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div className="w-[100%] max-w-[400px]">
      <FormWrapper onSubmit={handleSubmit(onSubmit)} title="Авторизация на сайте">
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
        <Button text="Войти" type="submit" disabled={isLoading} className="w-[100%] bg-blue-500" />
        {error && (
          <div className="text-center text-red-500 mt-2">
            Ошибка авторизации. Пожалуйста, повторите попытку
          </div>
        )}
      </FormWrapper>
    </div>
  );
};
