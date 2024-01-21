import { Header } from './layout/index.js'
import { Main } from './pages/index.js'
import { GlobalStyles } from './global/index.js'

function App() {
  return (
      <>
          <GlobalStyles />
          <Header />
          <Main />
      </>
  )
}


export default App
