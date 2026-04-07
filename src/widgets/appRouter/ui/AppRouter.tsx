import { ProtectedRoute } from "features/protectedRoute";
import { LoginPage } from "pages/loginPage";
import { MainPage } from "pages/mainPage/ui/MainPage";
import { NotFoundPage } from "pages/notFoundPage";
import { ProfilePage } from "pages/profilePage";
import { PublicPage } from "pages/publicPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        {/**  Защищённые пути */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        {/**  Публичные пути */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/public" element={<PublicPage />} />

        {/**  404 путь */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
