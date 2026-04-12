export type AuthContextData = {
  token: string | null;
  setToken?: (token: string | null) => void;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};
