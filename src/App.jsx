import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router.jsx';
import { GlobalStyles } from './global/index.js';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
