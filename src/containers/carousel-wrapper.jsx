import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Carousel from "../components/carousel";

class CarouselWrapper extends Component {
    render() {
        return (
            <Container maxWidth="lg">
             <Carousel />
            </Container>

        );
    }
}

export default CarouselWrapper;