import type { Task } from "entities/task";
import { baseApi } from "shared/api/baseApi";

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => "todos",
      transformResponse: (response: Task[]) => response.slice(0, 10),
      providesTags: ["Tasks"],
    }),
  }),
});

export const { useGetTasksQuery } = tasksApi;
