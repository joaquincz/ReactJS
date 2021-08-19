import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer (){
    const [product, setProduct] = useState({})
    
    const data = [
        {
            id: "1",
            name: "Lapices",
            description: "Lapices de colores",
            stock: 5
        },
        {
            id: "2",
            name: "Cuadernos",
            description: "Cuadernos de tapa dura",
            stock: 10
        },
        {
            id: "3",
            name: "Hojas",
            description: "Hojas cuadriculadas",
            stock: 7
        }
    ]

    useEffect(() => {
        new Promise((resolve, reject) => {
            
            setTimeout(() => resolve(data), 2000)
        }).then((dataResolve) => {
            setProduct(dataResolve)
        })
        .catch((error) => {
            console.log("error", error)
        })
    }, [])

    return(
        <>
            <h1>Productos:</h1>
            <div><ItemDetail prod={product}></ItemDetail></div>
        </>
    )
}

export default ItemDetailContainer;