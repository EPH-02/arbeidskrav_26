import ShoppingList from "./AddForm"

export default function ShoppingList({ items, toggleBought, updateCount, removeBoughtItems }) {
    return (
        <section>
        <h2>Varer</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <label>
                <input type="checkbox" checked={item.bought} onChange={() => toggleBought(item.id)}/>
                {item.name}
              </label>

              <input type="number" min="1" value={item.count} onChange={e => updateCount(item.id, Number(e.target.value))}/>
            </li>
          ))}
        </ul>

        <button onClick={removeBoughtItems}>Fjern merkede varer </button>
      </section>
    )
}