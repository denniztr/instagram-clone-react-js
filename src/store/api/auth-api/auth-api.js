import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'auth-api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://wedev-api.sky.pro/',
    }),
    endpoints: (build) => ({
        registerUser: build.mutation({
            query: ({ name, login, password }) => ({
                url: 'api/user',
                method: 'POST',
                body: JSON.stringify({
                    name,
                    login,
                    password,
                }),
            }),
        }),
        loginUser: build.mutation({
            query: ({ login, password }) => ({
                url: 'api/user/login',
                method: 'POST',
                body: JSON.stringify({
                    login,
                    password,
                }),
            }),
        }),
    }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
