import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface Users {
  email: string
  id: number
  name: string
  phone: number
  username: string
  website: string
}

export const usersApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  reducerPath: "usersApi",
  tagTypes: ["Users"],
  endpoints: build => ({
    getUsers: build.query<Users[], void>({
      query: () => "users",
      providesTags: () => ["Users"],
    }),
  }),
})

export const { useGetUsersQuery } = usersApiSlice
