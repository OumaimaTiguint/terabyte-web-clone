import React from 'react';
import { whatWeOfferData } from '../data/whatWeOfferData';
import OfferExpCard from './OfferExpCard';

function WhatWeOffer() {
    return (
        <div className='relative pt-8 px-4 sm:px-16'>
            <div className='flex flex-col justify-center items-center element-to-fade-to-top fade-in-top'>
                <h2 className='text-[#6DBBFF] sm:text-2xl xs:text-xl text-lg font-semibold leading-normal p-8'>
                    SERVICES
                </h2>
                <h3 className='text-center sm:text-[4.81rem] xs:text-6xl text-5xl font-extrabold leading-[110%] p-8'>
                    What do we offer ?
                </h3>
                <h4 className='text-center sm:text-3xl xs:text-2xl text-xl font-medium leading-10 px-7'>
                    Let’s Create good products Together , From Day 1
                </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-28 max-w-[76.2rem] justify-center px-5">
                {whatWeOfferData.map((offer) => (
                    <OfferExpCard key={offer.id}
                                  id={offer.id}
                                  title={offer.title}
                                  logo={offer.logo}
                                  description={offer.description} />
                ))}
            </div>
        </div>
    )
}

export default WhatWeOffer;