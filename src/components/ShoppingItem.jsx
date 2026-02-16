

export default function ShoppingItem({ item, toggleBought, updateCount, }){
    return(
        <li key={item.id}>
              <label>
                <input type="checkbox" checked={item.bought} onChange={() => toggleBought(item.id)}/>
                {item.name}
              </label>

              <input type="number" min="1" value={item.count} onChange={e => updateCount(item.id, Number(e.target.value))}/>
            </li>
    )
}