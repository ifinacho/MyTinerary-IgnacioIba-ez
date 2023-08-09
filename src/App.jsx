import { useState } from 'react'
import './styles/App.css'
import Home from './pages/Home'
import Main from './layouts/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main>
        <Home />
      </Main>
    </>
  )
}

export default App