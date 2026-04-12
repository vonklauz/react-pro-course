import { baseApi } from "shared/api/baseApi";
import type { LoginRequest, LoginResponse } from "../model/types";

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (loginRequest) => ({
        url: "auth/login",
        method: "POST",
        body: loginRequest,
      }),
    }),
  }),
});

export const { useLoginMutation } = tasksApi;
