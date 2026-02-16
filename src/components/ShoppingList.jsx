import ShoppingItem from "./ShoppingItem"

export default function ShoppingList( {items, toggleBought, updateCount, removeBoughtItems}){
    return(
        <section>
        <h2>Varer</h2>
        <ul>
          {items.map(item => (<ShoppingItem key={item.id} item={item} toggleBought={toggleBought} updateCount={updateCount}/>))}
        </ul>

        <button onClick={removeBoughtItems}>Fjern merkede varer </button>
      </section>
    )
}