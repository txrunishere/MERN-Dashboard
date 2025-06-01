import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { LoginDataType } from "../../types/types";

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/v1" }),
  endpoints: (builder) => {
    return {
      handleLoginUser: builder.mutation({
        query: (data: LoginDataType) => {
          return {
            url: "/user/login",
            method: "POST",
            body: data,
          };
        },
      }),
    };
  },
});

export default apiSlice;
export const { useHandleLoginUserMutation } = apiSlice;
