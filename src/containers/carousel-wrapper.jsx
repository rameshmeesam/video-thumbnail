import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Carousel from "../components/carousel";
import ShowAllVideos from "../components/show-all-videos";

class CarouselWrapper extends Component {
    render() {
        return (
            <Container maxWidth="lg">
             <Carousel />
             <ShowAllVideos />
            </Container>
        );
    }
}

export default CarouselWrapper;