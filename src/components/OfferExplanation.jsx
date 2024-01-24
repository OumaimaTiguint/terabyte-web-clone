import React from 'react';
import OfferExpCard from './OfferExpCard';
import { offerExplanationData } from '../data/offerExplanationData';
import { countingLpcData } from '../data/countingLpcData';

function OfferExplanation() {
    return (
        <div className='mx-auto flex flex-col md:flex-row sm:px-16 px-4'>
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

                <div className='relative max-w-[67.3rem] flex flex-wrap m-auto justify-center items-center gap-5 mt-20 mb-36 element-to-fade-to-top element-to-start-counting fade-in-top'>
                    {countingLpcData.map((e) => (
                        <div key={e.id} className='h-16 justify-center items-center gap-1 flex text-white'>
                            <h3 className='text-right sm:text-[50px] xs:text-4xl text-3xl font-semibold'>{e.number}</h3>
                            <div className='w-5 h-5 bg-blue-200'></div>
                            <p className='sm:text-xl xs:text-lg text-base font-normal'>{e.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OfferExplanation;