import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import VideoMediaCard from "./VideoMediaCard";
import CarouselHeader from "./carousel-header";
import "../css/carousel.css";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Carousel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <CarouselHeader title="Videos" />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <VideoMediaCard
              width={612}
              height={388}
              imgUrl="/img/thumb-1.png"
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <div className="itemInfo">
            Rohit Kaila on All Things Tech | #TechnologyOnTheMove
          </div>
          <Divider variant="middle" />
          <div className="videoInfo">
            <span>
              {" "}
              <div className="itemInfo">
                Episode 2 - #TechnologyOnTheMove | Ft. Lalitha Ramani
              </div>
              <div>
                <VideoMediaCard
                  width={200}
                  height={200}
                  imgUrl="/img/thumb-2.png"
                />
              </div>
            </span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
