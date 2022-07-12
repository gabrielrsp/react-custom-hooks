import { useEffect, useRef, useState } from 'react'
import FunctionContextComponent from './Components/FunctionContextComponent'
import { ThemeProvider } from './CustomHooks/contextHooks/ThemeContext'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

function App () {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App
