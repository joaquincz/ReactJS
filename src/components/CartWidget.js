import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function CartWidget() {
    return(
    <Button
        variant="outlined"
        color="inherit"
        size="large"
        startIcon={<ShoppingCartOutlinedIcon />}
    >
    </Button>
    )
}

export default CartWidget;