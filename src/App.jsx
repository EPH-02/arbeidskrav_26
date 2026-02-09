import { useState } from 'react'
import './App.css'

function App() {
  const [item, setItem] = useState([
    {id : 1, name: "Melk", count: 1, bought: true},
    {id : 2, name: "Brød", count: 1, bought: false}
  ])
  return (
    <>
      
    </>
  )
}

export default App
