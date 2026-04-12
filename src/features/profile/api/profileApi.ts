import { baseApi } from "shared/api/baseApi";
import type { UserProfile } from "../model/types";

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfileInfo: builder.query<UserProfile, void>({
      query: () => ({
        url: "users/me",
        method: "GET",
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }),
    }),
  }),
});

export const { useGetProfileInfoQuery } = tasksApi;
