import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CardMedia from "@material-ui/core/CardMedia";
import VideoMediaCard from "./VideoMediaCard";
import "../css/carousel.css";

class ShowAllVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false,
    };
    this.toggleShowAllVideos = this.toggleShowAllVideos.bind(this);
  }

  toggleShowAllVideos(){
      this.setState({showAll: !this.state.showAll ? true : false});
  }

  render() {
      const {showAll} = this.state;
      const buttonText = !showAll ? "show all videos" : "hide all Videos"
    return (
      <div>
        <Grid container justify="center" className="showAllButtonWrapper">
          <Button onClick={this.toggleShowAllVideos}>
            {buttonText} <ArrowForwardIosIcon fontSize="small" />
          </Button>
        </Grid>
        {showAll && (
        <>
        <Grid container className="allVideosGrid">
          <Grid item xs={6} className="allVideosGridLeft">
            <VideoMediaCard
              width={612}
              height={388}
              imgUrl="/img/thumb-2.png"
            />
          </Grid>
          <Grid item xs={6} className="allVideosGridRight">
          Rohit Kaila on All Things Tech | #TechnologyOnTheMove
          </Grid>
        </Grid>

        <Grid container className="allVideosGrid">
          <Grid item xs={6}>
            <VideoMediaCard
              width={612}
              height={388}
              imgUrl="/img/thumb-3.png"
            />
          </Grid>
          <Grid item xs={6} className="allVideosGridRight">
          Episode 2 - #TechnologyOnTheMove | Ft. Lalitha Ramani
          </Grid>
        </Grid>
        </>
        )}
      </div>
    );
  }
}

export default ShowAllVideos;
