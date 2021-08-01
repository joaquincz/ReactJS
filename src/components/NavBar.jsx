import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import CartWidget from './CartWidget';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

function NavBar() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            E-Commerce
          </Typography>
          <Button color="inherit" variant="outlined" className={classes.menuButton}>
            Home
          </Button>
          <Button color="inherit" variant="outlined" className={classes.menuButton}>
            Servicios
          </Button>
          <Button color="inherit" variant="outlined" className={classes.menuButton}>
            Nosotros
          </Button>
          <Button color="inherit" variant="outlined" className={classes.menuButton}>
            Contacto
          </Button>

          <CartWidget />

        </Toolbar>
      </AppBar>
    </div>
    )
    
}

export default NavBar;