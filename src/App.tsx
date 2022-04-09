import { useState } from 'react'
import TimeoutComponent from './CustomHooks/useTimeout/TimeoutComponent'
import ToggleComponent from './CustomHooks/useToggle/ToggleComponent'

function App() {
  return (
    <div className="App">
      <h1>ToggleComponent</h1>
      <ToggleComponent/>
      <h1>Timeout Component</h1>
      <TimeoutComponent/>
    </div>
  )
}

export default App
