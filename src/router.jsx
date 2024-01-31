import { Routes, Route } from 'react-router-dom';
import { Header } from './layout/index.js';
import { Main, Profile, Auth, AddPost, NotFound } from './pages/index.js';

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Header />}>
                <Route element={<Main />} path="/" />
                <Route element={<Profile />} path="user/:id" />
                <Route element={<AddPost />} path="add" />
            </Route>
            <Route element={<Auth />} path="authorization" />
            <Route element={<NotFound />} path="*" />
        </Routes>
    );
};
