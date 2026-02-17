
//Her ligger det html struktur for input feltet, og funksjonen addItem som tar imot input og legger det til i handlelisten i App.jsx
export default function AddForm({ name, setName, count, setCount, error, addItem}) {
    return(
        <form onSubmit={addItem}>
        <label> 
          <h3>Vare</h3>
          {/*Input felt for navn på vare, sender name og setName til App.jsx*/}
          <input type="text" placeholder="Egg..." value={name} onChange={e => setName(e.target.value)}/>
        </label>

        <label>
          <h3>Antall</h3>
          {/* Input felt for antall, sender count og setCount til App.jsx */}
          <input type="number" placeholder="Antall..." min="1" value={count} onChange={e => setCount(e.target.value)}/>
        </label>

        <button type="submit">Legg til vare</button>

        {/* Viser error melding dersom name eller count ikker er fylt ut */}
        {error && <p>{error}</p>}
      </form>
    )
}