import React, {useState} from "react";
import Button from '@material-ui/core/Button';

function ItemCount() {
    const [initial, setInitial] = useState(0);
    const [stock, setStock] = useState(5)

    return(
        <>
        <h1>Contador: {initial}</h1>
        <Button color="primary" variant="contained"
        onClick={() => setInitial(initial + 1) & setStock(stock -1)}>
        Mas
        </Button>
        <Button color="primary" variant="contained"
        onClick={() => setInitial(initial - 1) & setStock(stock +1)}>
        Menos
        </Button>
        <h3>Stock: {stock}</h3>
        </>
    );
}


export default ItemCount;