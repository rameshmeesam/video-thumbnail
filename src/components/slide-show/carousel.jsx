import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper, Button} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import VideoMediaCard from "../VideoMediaCard";
import "../../css/comman.css";


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
        <Paper>
            <VideoMediaCard
              width={612}
              height={388}
              imgUrl={props.item.url}
            />
        </Paper>
        </div>
    )
}