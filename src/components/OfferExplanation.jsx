import React from 'react';
import OfferExpCard from './OfferExpCard';
import { offerExplanationData } from '../data/offerExplanationData'

function OfferExplanation() {
    return (
        <div className='mx-auto flex flex-col md:flex-row'>
            <div className='w-full p-4 md:p-8'>
                <h4 className='text-center sm:text-3xl xs:text-2xl text-xl font-medium leading-10 px-7 text-white mb-20'>
                    Let’s Create good products Together, From Day 1
                </h4>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {offerExplanationData.map((offer) => (
                        <OfferExpCard key={offer.id}
                                      id={offer.id}
                                      title={offer.title}
                                      logo={offer.logo}
                                      description={offer.description}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OfferExplanation;