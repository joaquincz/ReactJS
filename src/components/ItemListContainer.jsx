import ItemCount from './ItemCount'
import ItemList from './ItemList'

function ItemListContainer(props){
    return (
        <>
        <h1>Tienda {props.greeting}</h1>
        <ItemCount stock={5} initial={1} />
        <ItemList />
        </>
        )
}

export default ItemListContainer;
