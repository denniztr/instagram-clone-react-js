import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const postsApi = createApi({
    reducerPath: 'posts-api',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://wedev-api.sky.pro/api/v1/prod/`
    }),
    endpoints: (build) => ({
        getPosts: build.query({
            query: () => 'instapro',
        }),
    })
})

export const {
    useGetPostsQuery
} = postsApi