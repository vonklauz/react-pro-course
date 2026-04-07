import type { schema } from "../lib/validation";
import type z from "zod";

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
};

export type LoginFormData = z.infer<typeof schema>;
