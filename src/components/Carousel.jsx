import React from 'react';
import Cards from './Cards';
import CardInfo from './CardInfo';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

class Carousel extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            arrows: true,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 5000,
            lazyLoad: true,
            className: "slides",
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        }

        return (
            <Slider {...settings}>
                {Cards.map((item) => {
                    return (
                        <div className="cards">
                            <img className="b-card-image" src={item.imgSrc} alt={item.imgSrc} />
                            <div>{<CardInfo title={item.title} subTitle={item.subTitle} link={item.link} />}
                            </div>
                        </div>
                    )
                })}
            </Slider>
        );
    }
}

export default Carousel;