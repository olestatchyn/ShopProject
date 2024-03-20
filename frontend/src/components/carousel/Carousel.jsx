import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cl from './Carousel.module.scss';


import slide1 from '../../source/carousel/1.png';
import slide2 from '../../source/carousel/2.png';
import slide3 from '../../source/carousel/3.png';
import slide4 from '../../source/carousel/4.png';
import slide5 from '../../source/carousel/5.png';
import slide6 from '../../source/carousel/6.png';

const CarouselComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '100px',
        cssEase: 'ease-in-out',
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (
        <div className={cl.carousel}>
            <Slider {...settings}>
                <div className={cl.slide}>
                    <img src={slide1} alt="First Slide" />
                </div>
                <div className={cl.slide}>
                    <img src={slide2} alt="Second Slide"/>
                </div>
                <div className={cl.slide}>
                    <img src={slide3} alt="Third Slide"/>
                </div>
                <div className={cl.slide}>
                    <img src={slide4} alt="Fourth Slide"/>
                </div>
                <div className={cl.slide}>
                    <img src={slide5} alt="Fifth Slide"/>
                </div >
                <div className={cl.slide}>
                    <img src={slide6} alt="Sixth Slide"/>
                </div>
            </Slider>
        </div>
    );
};

export default CarouselComponent;
