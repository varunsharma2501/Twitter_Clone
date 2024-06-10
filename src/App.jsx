import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Body/>
       <Toaster/>
    </>
  )
}

export default App
