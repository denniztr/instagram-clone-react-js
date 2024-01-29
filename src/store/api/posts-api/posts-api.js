import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const postsApi = createApi({
    reducerPath: 'posts-api',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://wedev-api.sky.pro/api/v1/prod/instapro`
    }),
    endpoints: (build) => ({
        getPosts: build.query({
            query: () => '',
        }),
        getUserPosts: build.query({
            query: (id) => ({
                url: `/user-posts/${id}`,
            })
        }),

    })
})

export const {
    useGetPostsQuery,
    useGetUserPostsQuery,
} = postsApi