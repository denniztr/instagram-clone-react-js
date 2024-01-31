import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppRouter } from './router.jsx';
import { store } from './store/index.js';
import { GlobalStyles } from './global/index.js';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyles />
                <AppRouter />
            </BrowserRouter>
        </Provider>
    );
}

export default App;