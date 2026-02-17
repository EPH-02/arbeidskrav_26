import ShoppingItem from "./ShoppingItem"

//Her ligger det html struktur for selve handlelisten, og funksjonene for å toggle bought, oppdatere count og fjerne merkede varer. Tar imot fra ShoppingItem
export default function ShoppingList( {items, toggleBought, updateCount, removeBoughtItems}){
    return(
        <section>
        <h2>Varer</h2>
        <ul>
          {/* Mapper gjennom items og sender hver item til ShoppingItem komponenten */}
          {items.map(item => (<ShoppingItem key={item.id} item={item} toggleBought={toggleBought} updateCount={updateCount}/>))}
        </ul>

        <button onClick={removeBoughtItems}>Fjern merkede varer </button>
      </section>
    )
}