import React, { Component } from "react";
import "../../css/carousel.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import IconButton from "@material-ui/core/IconButton";

class ArrowButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="headerWrapper">
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
      </div>
    );
  }
}

export default ArrowButtons;
