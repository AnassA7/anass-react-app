import { useState } from 'react'
import './App.css'
import Notes from './components/Notes'
import List from './assets/Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Notes list={List} />
    </>
  )
}

export default App
