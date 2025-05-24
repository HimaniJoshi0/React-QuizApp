import { useState } from 'react'
import './App.css'
import AppRoutes from './appRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="">
    <AppRoutes/>
  </div>
  )
}

export default App
