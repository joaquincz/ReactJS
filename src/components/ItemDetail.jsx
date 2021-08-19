function ItemDetail(props){
    return(
        <>
        <h1>{props.prod.name}</h1>
        <h5>{props.prod.description}</h5>
        <h3>
        Stock: 
        {props.prod.stock}
        </h3>
        <hr />
        </>
    )
}

export default ItemDetail;