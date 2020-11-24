import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ArrowButtons from "../components/header/arrow-buttons";
import HeaderTitle from "../components/header/title";
import VideoMediaCard from "../components/VideoMediaCard";
import SlideShow from "../components/slide-show/carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:"#F9F9F9"
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CarouselWrapper() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        {/* header 
        <Grid item xs={12} container spacing={3}>
        <Grid item xs={3}>
        <HeaderTitle title = "Videos"/>
        </Grid>
        <Grid item xs={6}>
          
        </Grid>
        <Grid item xs={3}>
         <ArrowButtons />
        </Grid>
        </Grid>*/}
        {/* carosel */}
        <Grid item xs={12} container spacing={3}>
        <SlideShow id="myTest"></SlideShow>
        </Grid>

        {/* footer */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>footer</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
