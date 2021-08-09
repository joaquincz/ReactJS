import React, {useState} from "react";
import Button from '@material-ui/core/Button';

function ItemCount({stock, initial}) {
    const [count, setCount] = useState(initial)


    function sumar(){
        if(count < stock){
            setCount (count + 1)
        }
    }
    
    function restar(){
        if(count > 1){
            setCount (count - 1)
        }
    }

    return(
        <>
        <h1>Contador: {count}</h1>
        <Button color="primary" variant="contained" onClick={sumar}>
        Agregar
        </Button>
        <Button color="primary" variant="contained" onClick={restar}>
        Quitar
        </Button>
        
        <h3>Stock: {stock}</h3>
        </>
    );
}


export default ItemCount;