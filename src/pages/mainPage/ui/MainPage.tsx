import { useMemo } from "react";
import { useAuth } from "shared/features/authRouting";

export const MainPage = () => {
  const { token } = useAuth();

  const renderHeader = useMemo(() => {
    return (
      <div className="flex justify-end p-4 gap-4 border">
        <a href={token ? "/profile" : "/login"} className="block text-center text-blue-500 hover:underline">
          {token ? "Профиль" : "Войти"}
        </a>
        <a href="/portalShowcase" className="block text-center text-blue-500 hover:underline">
          Пример работы React Portal
        </a>
      </div>
    );
  }, [token]);

  return (
    <div>
      {renderHeader}
      <h1 className="text-center">Главная страница</h1>
    </div>
  );
};
