import { useState } from 'react'
import './App.css'
import './style/stylesheet.css'
import './components/AddForm.jsx'
import './components/ShoppingList.jsx'
import AddForm from './components/AddForm.jsx'
import ShoppingList from './components/ShoppingList.jsx'

function App() {
  //Handle liste med useState og noen varer for kravspesifikasjonen
  const [items, setItems] = useState([
    {id : 1, name: "Mjølk", count: 1, bought: true},
    {id : 2, name: "Kaku", count: 1, bought: false},
    {id : 3, name: "Ost", count: 1, bought: false}
  ])
  
  //States som skal manipulere name og count
  const [name, setName] = useState("")
  const [count, setCount] = useState("")

  //State for error kode
  const[error, setError] = useState("")

  //Funksjon for å legge til varer i handlelisten
  function addItem(event){

    //Stopper siden fra å refreshe
    event.preventDefault()

    //Feilmelding dersom name eller count ikke er fylt ut 
    if(!name || !count){
      setError("Du må fylle ut varenavn og antall.")
      return
    }

    //Laget ny vare
    const newItem = {
      id: Date.now(), //Bruker dato for å lage en unik id. Kunne brukt math.random()
      name,
      count: Number(count), //Sørger for at count er et tall, ikke en string
      bought: false
    }

    //Legger til ny item øverst i listen
    setItems(prev => [newItem, ...prev]) //Tømmer input feltene og error melding etter submit
    setName("")
    setCount("")
    setError("")
  }

  //Funksjon for å toggle bought på varer i listen
  function toggleBought(id) {
  setItems(prev =>
    prev.map(item =>
      item.id === id ? { ...item, bought: !item.bought } : item //Dersom id matcher, toggler bought, ellers returnerer item som det er 
    )
  );
}

//Fjerner merkede varer fra listen 
function removeBoughtItems(){
  setItems(prev => prev.filter(item => !item.bought)) //Fjerner alle varer som er bought: true
}

  //Funksjon som skal hindre 0 eller negative tall i count 
  function updateCount(id, newCount){
    if (newCount < 1) return

    setItems(prev => prev.map(item => item.id === id ? {...item, count: newCount} : item)) //Om id matcher, oppdaterer count, ellers returnerer item som det er
  }

  return (
      <main>
        <h1>Handleliste</h1>
      {/* Her er selve input feltet */}
      <AddForm name={name} setName={setName} count={count} setCount={setCount} error={error} addItem={addItem}/>

      {/* Her er listen som tar imot input fra AddForm og ShoppingItem + ShoppingItem */}
      <ShoppingList items={items} toggleBought={toggleBought} updateCount={updateCount} removeBoughtItems={removeBoughtItems} /> 
    </main>
  )
}

export default App
