import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import VideoMediaCard from "./VideoMediaCard";
import CarouselHeader from "./carousel-header"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Carousel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
      <Grid item xs={12}>
        <CarouselHeader title = "Videos" />
      </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
           <VideoMediaCard />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Content here</Paper>
        </Grid>
      </Grid>
    </div>
  );
}