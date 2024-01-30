import {configureStore} from "@reduxjs/toolkit";
import {postsApi, authApi} from "../api/index.js";
import userReducer  from "../user-slice/user-slice.js";

export const store = configureStore({
    reducer: {
        user: userReducer,
        [postsApi.reducerPath]: postsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware, authApi.middleware),
});