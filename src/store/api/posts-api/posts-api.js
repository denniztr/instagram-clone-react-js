import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
    reducerPath: 'posts-api',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://wedev-api.sky.pro/api/v1/testtest/instapro`,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().user.token;
            if (token) headers.set('Authorization', `Bearer ${token}`);
        },
    }),
    endpoints: (build) => ({
        getPosts: build.query({
            query: () => '',
        }),
        getUserPosts: build.query({
            query: (id) => ({
                url: `/user-posts/${id}`,
            }),
        }),
        uploadPost: build.mutation({
            query: ({ description, imageUrl }) => ({
                url: '',
                method: 'POST',
                body: JSON.stringify({
                    description,
                    imageUrl,
                }),
            }),
        }),
    }),
});

export const { useGetPostsQuery, useGetUserPostsQuery, useUploadPostMutation } =
    postsApi;
