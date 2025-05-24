import { useState } from 'react'
import './App.css'
import AppRoutes from './appRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="h-20 bg-red-200">
    <AppRoutes/>
  </div>
  )
}

export default App
