import React from 'react';
import OurBrandCard from './OurBrandCard';
import { ourBrandCardData } from '../data/ourBrandCardData';

function OurBrand() {
    return (
        <div className='relative flex flex-col px-6'>
            <div className='flex flex-col justify-center items-center py-20 element-to-fade-to-top fade-in-top'>
                <h2 className="sm:text-2xl xs:text-xl text-lg text-center font-semibold leading-10 p-8 text-blue-400">
                    OUR BRAND
                </h2>
                <h3 className="max-w-[44rem] md:text-6xl xs:text-5xl text-4xl text-center font-extrabold mt-6">
                    Take a quick look at our Brand Pillars
                </h3>
                <p className="max-w-[65.25rem] text-justify text-white sm:text-3xl xs:text-2xl 2xs:text-xl text-lg font-normal leading-normal mt-6">
                    TeraByte Web is like other companies, established with earnings in focus,
                    but unlike others, we value support, help, service, and reputation higher
                    than earnings. We do not consider year-long experiences or heavy
                    background-knowledgeas tools for inflicting further costs on our partners.
                </p>
            </div>
            {/* Cards */}
            <div className='relative max-w-[65rem] w-full h-full m-auto gap-4 flex flex-wrap justify-center py-6'>
                {ourBrandCardData.map((c, index) => (
                    <OurBrandCard key={index}
                                  id={index}
                                  title={c.title}
                                  logo={c.logo}
                                  description={c.description} />
                ))}
            </div>
        </div> 
    );
}

export default OurBrand;