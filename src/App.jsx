import {BrowserRouter} from "react-router-dom"
import {AppRouter} from './router.jsx'
import {Header} from './layout/index.js'
import {GlobalStyles} from './global/index.js'

function App() {
  return (
      <BrowserRouter>
          <GlobalStyles />
          <Header />
          <AppRouter />
      </BrowserRouter>
  )
}

export default App
