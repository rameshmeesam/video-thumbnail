import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper, Button, Grid} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import VideoMediaCard from "../VideoMediaCard";
import "../../css/comman.css";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:"#F9F9F9",
      marginTop: "25px"
    },
    paper: {
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

 
export default function SlideShow(props)
{

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            url: "https://www.youtube.com/watch?v=L2mNptzHk08"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            url: "https://www.youtube.com/watch?v=XB1REfMapIE"
        },
        {
            name: "Random Name #3",
            description: "Hello World!",
            url: "https://www.youtube.com/watch?v=JJivCX2sUmc"
        }
    ]
 
    return (
        <Carousel
                className="myTest"
                next={ () => {/* Do stuff */} }
                prev={ () => {/* Do other stuff */} }
                autoPlay= {false}
                navButtonsAlwaysVisible = {true}
                indicators={false}
                fullHeightHover= {true}
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
 
function Item(props)
{
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Grid item xs={12} container spacing={3}>
        <Grid item xs={3}> Videos </Grid>
        <Grid item xs={7}>  </Grid>
        <Grid item xs={2}>  </Grid>
        </Grid>
        <Grid item xs={12} container spacing={3}>
         <Grid item xs={6}>       
          <Paper>
            <VideoMediaCard
              width={612}
              height={388}
              imgUrl={props.item.url}
            />
        </Paper>
        </Grid>
         <Grid item xs={6}>
          <div>Title</div>
          <div>Divider</div>
          <div>          
          <Grid item xs={12} spacing={3} container >
              <paper>            <VideoMediaCard
              width={200}
              height={50}
              imgUrl={props.item.url}
            /></paper>
              <paper><VideoMediaCard
              width={200}
              height={50}
              imgUrl={props.item.url}
            /></paper>
          </Grid>
         </div>
         </Grid>
        </Grid>
        </div>
    )
}