import type { FC } from "react";
import type { ProfileCardProps } from "../model/types";

export const ProfileCard: FC<ProfileCardProps> = ({ name, email, phone }) => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Информация о профиле</h3>
      <div className="space-y-2">
        <p>
          <span className="font-medium">Имя:</span> {name}
        </p>
        <p>
          <span className="font-medium">Email:</span> {email}
        </p>
        <p>
          <span className="font-medium">Номер телефона:</span> {phone}
        </p>
      </div>
    </div>
  );
};
