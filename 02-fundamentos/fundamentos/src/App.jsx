// Components
import FirstComponent from './components/FirstComponent'
import { useState } from 'react'
// Style - CSS
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponent />
    </>
  )
}

export default App
