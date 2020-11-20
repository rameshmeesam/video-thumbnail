import React, { Component } from "react";
import {Grid, Button} from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class ShowAllVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false,
    };
  }

  render() {
    return (
      <Grid container justify="center">
        <Button>show all videos <ArrowForwardIosIcon fontSize="small" /></Button>
      </Grid>
    );
  }
}

export default ShowAllVideos;
