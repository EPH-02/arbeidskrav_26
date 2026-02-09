import { useState } from 'react'
import './App.css'

function App() {
  //Handle liste med useState
  const [item, setItem] = useState([
    {id : 1, name: "Mjølk", count: 1, bought: true},
    {id : 2, name: "Kaku", count: 1, bought: false},
    {id : 3, name: "OSt", count: 1, bought: false}
  ])
  
  //States som skal manipulere name og count
  const [name, setName] = useState("")
  const [count, setCount] = useState("")

  //State for error kode
  const[error, errorState] = useState("")

  //Funksjon for å legge til varer i handlelisten
  function addItem(event){

    //Stopper siden fra å refreshe
    event.preventDefault()

    //Feilmelding dersom name eller count ikke er fylt ut 
    if(!name || !count){
      errorState("Du må fylle ut varenavn og antall.")
      return
    }

    const newItem = {}
  }
  return (
    <>
      
    </>
  )
}

export default App
