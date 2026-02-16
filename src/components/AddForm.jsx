

export default function AddForm({ name, setName, count, setCount, error, addItem}) {
    return(
        <form onSubmit={addItem}>
        <label>
          <h3>Vare</h3>
          <input type="text" placeholder="Egg..." value={name} onChange={e => setName(e.target.value)}/>
        </label>

        <label>
          <h3>Antall</h3>
          <input type="number" placeholder="Antall..." min="1" value={count} onChange={e => setCount(e.target.value)}/>
        </label>

        <button type="submit">Legg til vare</button>

        {error && <p>{error}</p>}
      </form>
    )
}