/*function Item(props){
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

export default Item;*/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Item(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" component="h2">
        {props.prod.name}
        </Typography>
        <Typography className={classes.pos}>
        Stock: 
        {props.prod.stock}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
        {props.prod.description}
        </Typography>
      </CardContent>
      <hr />
    </Card>
  );
}