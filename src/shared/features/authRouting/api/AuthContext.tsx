import { createContext } from "react";
import type { AuthContextData } from "../model/types";

export const AuthContext = createContext<AuthContextData>({ token: null });
