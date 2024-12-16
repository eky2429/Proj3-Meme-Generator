import { useState } from 'react'
import Header from './components/Header.jsx'
import Meme from './components/Meme.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Meme />
    </>
  )
}

export default App
