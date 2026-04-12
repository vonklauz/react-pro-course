import { ProfileCard } from "entities/profileCard";
import { useGetProfileInfoQuery } from "../api/profileApi";
import { useAuth } from "shared/features/authRouting";
import { Button } from "shared/ui/button";

export const ProfileComponent = () => {
  const { data: profileInfo, isLoading, error } = useGetProfileInfoQuery();
  const { setToken } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken && setToken(null);
  };

  if (isLoading) {
    return <div className="text-center py-4">Загрузка...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-4">Ошибка загрузки профиля</div>;
  }

  if (profileInfo) {
    return (
      <>
        <div className="flex justify-end items-center p-4 gap-4 border">
          <a href="/" className="block text-center text-blue-500 hover:underline">
            Главная страница
          </a>
          <Button text="Выйти" onClick={handleLogout} className="bg-green-500" />
        </div>
        <ProfileCard {...profileInfo} />
      </>
    );
  }
};
