import React from 'react';
import ServiceDetailCard from './ServiceDetailCard';
import { umbracoServiceDetailsData } from '../data/umbracoServiceDetailsData';

function UmbracoServiceDetails() {
    return (
        <div className='relative pt-[1vw]'>
            <div className='p-4 md:px-6 lg:px-8 xl:px-10 pps:px-48 flex flex-col justify-center items-center'>
                <div className='relative w-full max-w-screen-2xl'>
                    <img src="https://terabyte-web.com/img/umbraco_services/Service%20Details.svg"
                         width="100%"
                         height="100%" />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center max-w-[1200px] mx-auto'>
                <div className='p-8 cards my-20 flex justify-center flex-wrap gap-5 lg:gap-x-6 gap-y-16'>
                    {umbracoServiceDetailsData.map((service, index) => (
                        <ServiceDetailCard key={index}
                                           id={index}
                                           image={service.image}
                                           title={service.title}
                                           description={service.description}
                                           list={service.list}
                                           description2={service.description2} />
                    ))}
                </div>
                <div className='absolute right-0 -bottom-1/8 z-[-1]'>
                    <img src="https://terabyte-web.com/img/background_svg/gradient_4.svg" 
                         width="1310"
                         height="1687" />
                </div>
                <div className='absolute -bottom-[5%] left-0 z-[-1] scale-x-125'>
                    <img src="https://terabyte-web.com/img/background_svg/gradient_1.svg" 
                         width="806"
                         height="1687" />
                </div>
            </div>
        </div>
    )
}

export default UmbracoServiceDetails;