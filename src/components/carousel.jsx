import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import VideoMediaCard from "./VideoMediaCard";
import ImageMediaCard from "./image-media-card";
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
  const [list, setList] = useState([
    {
      id: 1,
      title : "Rohit Kaila on All Things Tech",
      subTitle: "Episode 2 - #Rohit Kaila on All Things Tech",
      url: "/img/thumb-1.png"
    },
    {
      id: 2,
      title : "TechnologyOnTheMoveh",
      subTitle: "Episode 3 - #TechnologyOnTheMove | Ft. Lalitha Ramani",
      url: "/img/thumb-2.png"
    }
  ]);

  const next= () => {
    setList([
      {
        id: 2,
        title : "TechnologyOnTheMoveh",
        subTitle: "Episode 3 - #TechnologyOnTheMove | Ft. Lalitha Ramani",
        url: "/img/thumb-2.png"
      },  
      {
        id: 3,
        title : "TechnologyOnTheMoveh",
        subTitle: "Episode 4 - #TechnologyOnTheMove | Ft. Lalitha Ramani",
        url: "/img/thumb-2.png"
      }
    ]);
    console.log("clicked next button");
  }
  
  const prev= () => {
    console.log("clicked  prev");
    setList([
      {
        id: 2,
        title : "Rohit Kaila on All Things Tech",
        subTitle: "Episode 2 - #Rohit Kaila on All Things Tech",
        url: "/img/thumb-1.png"
      },
      {
        id: 3,
        title : "TechnologyOnTheMoveh",
        subTitle: "Episode 3 - #TechnologyOnTheMove | Ft. Lalitha Ramani",
        url: "/img/thumb-2.png"
      },  
      
    ]);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <CarouselHeader title="Videos" onNext= {next} onPrev={prev} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <VideoMediaCard
              width={612}
              height={388}
              imgUrl={list[0].url}
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
          { list.map((item,index) => {
             return (<Box p={index}>
              <div className="subMediaTitle">
                {item.subTitle}
              </div>
              <div>
                <ImageMediaCard
                  width={320}
                  height={200}
                  imgUrl={item.url}
                />
              </div>
            </Box>);
          })}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
