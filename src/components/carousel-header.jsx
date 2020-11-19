import React, { Component } from "react";
import "../css/carousel.css"

class CarouselHeader extends Component {
    constructor(props) {
        super(props);
    }
    
  render() {
    const {title} = this.props;
    return (
      <div>
        <span className="headerLeft">{title}</span>
        <span className="headerRight">
        Content here
        </span>
      </div>
    );
  }
}

export default CarouselHeader;


