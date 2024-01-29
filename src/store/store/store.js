import {configureStore} from "@reduxjs/toolkit"
import {postsApi, authApi} from "../api/index.js";

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware, authApi.middleware),
});