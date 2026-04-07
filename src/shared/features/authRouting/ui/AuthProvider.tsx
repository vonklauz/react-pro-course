import { useState, useEffect, type FC } from "react";
import { AuthContext } from "../api/AuthContext";
import type { AuthProviderProps } from "../model/types";

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    setIsReady(true);
  }, []);

  if (!isReady) {
    return null;
  }

  return <AuthContext value={{ token, setToken }}>{children}</AuthContext>;
};
