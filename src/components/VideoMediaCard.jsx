import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import ReactPlayer from "react-player";

export default function VideoMediaCard(props) {
  const useStyles = makeStyles({
    root: {
      maxWidth: props.width,
    },
  });

  const classes = useStyles();
  const {imgUrl} = props;

  return (
    <Card className={classes.root}>
      <ReactPlayer
        url={imgUrl}
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
          },
        }}
      />
    </Card>
  );
}
