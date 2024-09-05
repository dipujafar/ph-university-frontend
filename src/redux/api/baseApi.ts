import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../feature/auth/authSlice";
import { toast } from "sonner";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (header, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      header.set("authrization", `${token}`);
    }
    return header;
  },
});

const baseQueryWithRefreshToken : BaseQueryFn<
FetchArgs,
BaseQueryApi,
DefinitionType> = async (args, api, extraOption): Promise<any> => {
  let result = await baseQuery(args, api, extraOption);

  console.log("sending Refresh token");

  if(result?.error?.status === 404){
    toast.error(result?.error?.data?.message);
  }

  if (result?.error?.status === 401) {
    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });

    const data = res.json();

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;

      api.dispatch(
        setUser({
          user,
          token: data.data.token,
        })
      );

      result = await baseQuery(args, api, extraOption);
    }
    else{
        api.dispatch(logout())
    }
  }
  console.log(result);
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
