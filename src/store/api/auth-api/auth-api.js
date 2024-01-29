import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: 'auth-api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://wedev-api.sky.pro/'
    }),
    endpoints: (build) => ({
        registerUser: build.mutation({
            query: (body) => ({
                url: 'api/user',
                method: 'POST',
                body: JSON.stringify({
                    login: body.login,
                    name: body.name,
                    password: body.password,
                    // imageUrl: body.imageUrl,
                }),
            }),
        }),
    }),
})

export const {
    useRegisterUserMutation,
} = authApi;