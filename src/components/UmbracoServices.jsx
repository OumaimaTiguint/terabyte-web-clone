import React from 'react';
import UmbracoServiceCard from './UmbracoServiceCard';
import { umbracoServicesData } from '../data/umbracoServicesData';

function UmbracoServices() {
    return (
        <div className='relative pt-[1vw]'>
            <h2 className='px-2 text-center text-white text-3xl xl:text-5xl font-bold capitalize leading-10'>
                Our Umbraco Development Services
            </h2>
            <div className='p-4 md:px-6 lg:px-8 xl:px-10 pps:px-48 flex flex-col justify-center items-center'>
                <div className='cards my-20 flex justify-center flex-wrap gap-5 lg:gap-x-6 gap-y-16'>
                    {umbracoServicesData.map((service, index) => (
                        <UmbracoServiceCard key={index}
                                            id={index}
                                            image={service.image}
                                            title={service.title}
                                            description={service.description} />
                    ))}
                </div>

                <div className='absolute right-0 -bottom-1/7 z-[-1]'>
                    <img src="https://terabyte-web.com/img/background_svg/gradient_4.svg" 
                         width="1310"
                         height="1687" />
                </div>
                <div className='absolute -bottom-[20%] left-0 z-[-1] scale-x-125'>
                    <img src="https://terabyte-web.com/img/background_svg/gradient_1.svg" 
                         width="806"
                         height="1687" />
                </div>
            </div>
        </div>
    )
}

export default UmbracoServices;