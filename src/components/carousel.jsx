import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import VideoMediaCard from "./VideoMediaCard";
import CarouselHeader from "./carousel-header";
import "../css/carousel.css";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:"#F9F9F9"
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
          <div className="mainMediaTitleWrapper">
            <div className="mainMediaTitle">
              Rohit Kaila on All Things Tech | #TechnologyOnTheMove
            </div>
            <div>8 minutes</div>
          </div>
          <Divider variant="middle" />
          <Box display="flex" flexDirection="row" p={1} >
            <Box p={1}>
              <div className="subMediaTitle">
                Episode 2 - #TechnologyOnTheMove | Ft. Lalitha Ramani
              </div>
              <div>
                <VideoMediaCard
                  width={310}
                  height={200}
                  imgUrl="/img/thumb-2.png"
                />
              </div>
            </Box>
            <Box p={2}>
              <div className="subMediaTitle">
                Episode 3 - #TechnologyOnTheMove | Ft. Lalitha Ramani
              </div>
              <div>
                <VideoMediaCard
                  width={310}
                  height={200}
                  imgUrl="/img/thumb-3.png"
                />
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
