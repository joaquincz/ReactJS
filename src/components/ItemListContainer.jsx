import ItemCount from './ItemCount'

function ItemListContainer(props){
    return (
        <>
        <h1>Tienda {props.greeting}</h1>
        <ItemCount stock={5} initial={1} />
        </>
        )
}

export default ItemListContainer;
