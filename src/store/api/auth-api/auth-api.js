import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: 'auth-api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://wedev-api.sky.pro/api/v1/prod/instapro'
    }),
    endpoints: (build) => ({
        registerUser: build.mutation({
            query: (body) => ({
                url: 'api/user',
                method: 'POST',
                body: {
                    login: body.login,
                    password: body.password,
                    name: body.name,
                    imageUrl: body.imageUrl,
                },
            }),
        }),
    }),
})

export const {
    useRegisterUserMutation,
} = authApi;