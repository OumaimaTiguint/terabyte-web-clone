import React from 'react';
import Slider from 'react-slick';
import { discoverOffersData } from '../data/discoverOffersData';
import DiscoverOfferCard from './DiscoverOfferCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function DiscoverOffers() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToScroll: 2,
        slidesToShow: 2,
    };

    return (
        <div className='w-full relative md:mt-4 element-to-fade-to-top fade-in-top'>
            <div className='desc-offrs sm:w-[80%] sm:mx-auto mx-3 max-w-[1440px]'>
                <h2 className='container text-xl font-bold text-blue-300 w-auto pt-3'>OFFERS</h2>
                <h3 className="container w-auto md:mx-auto text-white md:text-5xl font-bold font-['Inter'] capitalize pt-3 text-start text-4xl">
                    Discover the perfect solution for your needs.
                </h3>
            </div>
            <Slider {...settings} className='product pb-8'>
                {discoverOffersData.map((offer, index) => (
                    <DiscoverOfferCard key={index}
                                       id={index}
                                       title={offer.title}
                                       image={offer.image}
                                       type={offer.type}
                                       date={offer.date}
                                       status={offer.status}
                                       link={offer.link} />
                ))}
            </Slider>
        </div>
    )
}

export default DiscoverOffers;