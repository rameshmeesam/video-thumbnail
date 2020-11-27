import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

export default function ImageMediaCard(props) {

  const useStyles = makeStyles({
    root: {
      maxWidth: props.width
    },
  });

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          width= {props.width}
          height= {props.height}
          image={props.imgUrl}
          title="Contemplative Reptile"
        />

      </CardActionArea>
    </Card>
  );
}