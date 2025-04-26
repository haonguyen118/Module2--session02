import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App1.css'
import Ex01 from './Component/Ex01/Ex01'
import Ex02 from './Component/Ex02/Ex02'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Ex01></Ex01> */}
      <Ex02></Ex02>
    </>
  )
}

export default App
