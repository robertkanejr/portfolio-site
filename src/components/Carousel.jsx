import React from 'react';
// import Card from './Card';
import CardInfo from './CardInfo';
import NRLogo from '../assets/images/NRLogo.png';
import BILogo from '../assets/images/BILogo.png';
import DHLogo from '../assets/images/DHLogo.jpg';
import CryptopediaLogo from '../assets/images/CryptopediaLogo.png';
import Tesla from '../assets/images/Tesla.png';
import BezosBot from '../assets/images/BezosBot.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const items = [
    {
        id: 0,
        title: 'Biz Incubate',
        subTitle: 'Business Incubator Bridging the Generational Gap',
        imgSrc: BILogo,
        link: 'https://bizincubate.com/',

    },
    {
        id: 1,
        title: 'New Remedies',
        subTitle: 'First & Only Federally Compliant CBD Franchise',
        imgSrc: NRLogo,
        link: 'https://newremediescbd.com/',
    },
    {
        id: 2,
        title: 'Dailee Holdings LLC.',
        subTitle: 'Compliant Solutions for the Cannabinoid Industry',
        imgSrc: DHLogo,
        link: 'https://daileecbd.com/',
    },
    {
        id: 3,
        title: 'Cryptopedia',
        subTitle: 'Cryptocurrency Trading Simulator',
        imgSrc: CryptopediaLogo,
        link: 'https://cryptopedia.netlify.app/',
    },
    {
        id: 4,
        title: 'Nikola Tesla Electrical Storm Tracker',
        subTitle: 'Track Storms Using Google Maps API',
        imgSrc: Tesla,
        link: 'https://Nikola-Tesla-electric.netlify.app/',
    },
    {
        id: 5,
        title: 'Bezos World Domination Game',
        subTitle: 'Futuristic Shooter Game',
        imgSrc: BezosBot,
        link: 'https://Bezos-domination-game.netlify.app/',
    },
]

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
                {items.map((item) => {
                    return (
                        <div className="cards">
                            <img className="b-card-image" src={item.imgSrc} alt={item.imgSrc} />
                            <div>{<CardInfo title={item.title} subTitle={item.subTitle} link={item.link} />}</div>
                        </div>
                    )
                })}
            </Slider>
        );
    }
}

export default Carousel;
