import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { UseCartProvider } from './hooks/useCart'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UseCartProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Router />
        </BrowserRouter>
      </UseCartProvider>
    </ThemeProvider>
  )
}

export default App
