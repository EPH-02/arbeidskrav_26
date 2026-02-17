
//Her ligger html struktur og informasjon for hver vare i handlelisten, og funksjonene for å toggle bought og oppdatere count
export default function ShoppingItem({ item, toggleBought, updateCount, }){
    return(
        <li key={item.id}>
              <label>
                {/* Checkbox for å toggle bought, sender id til App.jsx */}
                <input type="checkbox" checked={item.bought} onChange={() => toggleBought(item.id)}/>
                {item.name}
              </label>
                {/*Input felt for å oppdatere count, sender id og ny count til App.jsx */}
              <input type="number" min="1" value={item.count} onChange={e => updateCount(item.id, Number(e.target.value))}/>
            </li>
    )
}