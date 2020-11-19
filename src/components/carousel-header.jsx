import React, { Component } from "react";
import "../css/carousel.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import IconButton from "@material-ui/core/IconButton";

class CarouselHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
      <div>
        <span className="headerLeft">{title}</span>
        <span className="headerRight">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <ArrowBackIosIcon onClick={() => {}} />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <ArrowForwardIosIcon onClick={() => {}} />
          </IconButton>
        </span>
      </div>
    );
  }
}

export default CarouselHeader;
