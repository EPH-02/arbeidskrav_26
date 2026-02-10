import { useState } from 'react'
import './App.css'

function App() {
  //Handle liste med useState
  const [items, setItems] = useState([
    {id : 1, name: "Mjølk", count: 1, bought: true},
    {id : 2, name: "Kaku", count: 1, bought: false},
    {id : 3, name: "OSt", count: 1, bought: false}
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
      id: Date.now(),
      name,
      count: Number(count),
      bought: false
    }

    //Legger til ny item øverst i listen
    setItems(prev => [newItem, ...prev])
    setName("")
    setCount("")
    setError("")
  }

  //Funksjon for å toggle bought på varer i listen
  function toggleBought(id) {
  setItems(prev =>
    prev.map(item =>
      item.id === id ? { ...item, bought: !item.bought } : item
    )
  );
}

//Fjerner merkede varer fra listen 
function removeBoughtItems(){
  setItems(prev => prev.filter(item => !item.bought))
}

  //Funksjon som skal hindre 0 eller negative tall i count 
  function updateCount(id, newCount){
    if (newCount < 1) return

    setItems(prev => prev.map(item => item.id === id ? {...item, count: newCount} : item))
  }

  return (
      <main>
      <h1>Handleliste</h1>

      {/* Dette blir AddForm.jsx senere */}
      <form onSubmit={addItem}>
        <label>
          Vare:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label>
          Antall:
          <input
            type="number"
            min="1"
            value={count}
            onChange={e => setCount(e.target.value)}
          />
        </label>

        <button type="submit">Legg til</button>

        {error && <p>{error}</p>}
      </form>

      {/* Dette blir ShoppingList.jsx + ShoppingItem.jsx */}
      <section>
        <h2>Varer</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={item.bought}
                  onChange={() => toggleBought(item.id)}
                />
                {item.name}
              </label>

              <input
                type="number"
                min="1"
                value={item.count}
                onChange={e =>
                  updateCount(item.id, Number(e.target.value))
                }
              />
            </li>
          ))}
        </ul>

        <button onClick={removeBoughtItems}>Fjern merkede varer </button>
      </section>
    </main>
  )
}

export default App
