import React from 'react';
import { whyUmbracoData } from '../data/whyUmbracoData';
import OfferExpCard from './OfferExpCard';

function WhyUmbraco() {
    return (
        <div className='relative pt-[1vw]'>
            <div className='p-4 md:px-6 lg:px-8 xl:px-10 pps:px-48 flex flex-col justify-center items-center'>
                <div className='relative w-full max-w-screen-2xl'>
                    <img src="https://terabyte-web.com/img/umbraco_services/Why%20Umbraco%20_.svg" 
                        alt="contact_us" 
                        width="100%" 
                        height="100%" />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center my-28'>
                <div className='relative max-w-[76.2rem] flex flex-wrap justify-center gap-6'>
                    {whyUmbracoData.map((e, index) => (
                        <OfferExpCard key={index}
                                      id={index}
                                      title={e.title}
                                      description={e.description} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WhyUmbraco;