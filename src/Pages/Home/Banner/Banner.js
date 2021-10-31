import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <h3>Travel & explore the world</h3>
                        <p >Explore the word & go to travel with us</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 >Feel free</h3>
                        <p >Give the time for your self</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 >Recharge your self</h3>
                        <p>Breath the fresh air & explore yourself</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;