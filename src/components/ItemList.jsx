import React, {useState, useEffect} from "react";
import Item from "./Item";

function ItemList (){
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        new Promise((resolve, reject) => {
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
            setTimeout(() => resolve(data), 2000)
        }).then((dataResolve) => {
            setProducts(dataResolve)
        })
        .catch((error) => {
            console.log("error", error)
        })
    }, [])

    return(
        <>
            <h1>Productos:</h1>
            {products.map((productos) => (
            <div><Item prod={productos}></Item></div>
            ))}
        </>
    )
}

export default ItemList;