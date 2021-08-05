import ItemCount from './ItemCount'

function ItemListContainer(props){
    return (
        <>
        <h1>Tienda {props.greeting}</h1>
        <ItemCount />
        </>
        )
}

export default ItemListContainer;
