import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyled } from './styles/global'
import { CyclesContextProvider } from './contexts/CyclesContext'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter basename='ignite-timer'>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyled />
    </ThemeProvider>
  )
}
