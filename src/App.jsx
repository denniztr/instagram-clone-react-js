import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppRouter } from './router.jsx';
import { useGetPostsQuery } from './store/api/index.js';
import { setUser } from './store/user-slice/user-slice.js';
import { GlobalStyles } from './global/index.js';

function App() {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'));
    const { refetch } = useGetPostsQuery();

    useEffect(() => {
        dispatch(setUser(user));
        refetch();
    }, [dispatch, user, refetch]);

    return (
        <BrowserRouter>
            <GlobalStyles />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
