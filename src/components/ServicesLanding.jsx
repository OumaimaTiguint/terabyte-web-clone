import React from 'react';

function ServicesLanding() {
    return (
        <div className='relative w-full flex flex-col justify-center items-center overflow-hidden'>
            <div className='flex flex-col items-center sm:mt-60 mt-40 sm:mb-32 mb-24 px-6'>
                <h1 className='md:text-6xl xs:text-5xl text-4xl font-extrabold'>
                    Services
                </h1>
                <p className='max-w-[57.5rem] mt-8 text-justify justify-last sm:text-xl xs:text-lg text-base font-medium'>
                    We specialize in creating custom websites that suit the unique needs of our clients' businesses, providing ongoing
                    technical support and maintenance, optimizing websites for higher conversion rates, analyzing website traffic and user
                    behavior to improve performance, creating secure and user-friendly online stores, designing intuitive user interfaces
                    and experiences, and crafting brand identities through logo design, messaging, and style guidelines.
                </p>
            </div>
            {/* image */}
            <div className='relative max-w-[80%]'>
                <img className="w-full" 
                     src="https://terabyte-web.com/img/services-img/main-services-img.webp" 
                     width="100%" 
                     height="100%" 
                     alt="main-services-img" />
                <div className='w-full h-5/6 absolute bottom-0 left-0 bg-gradient-to-t from-[#0B2359] to-transparent'></div>
            </div>
            {/* Background colors */}
            <div className='absolute top-0 w-full min-w-[48rem] z-[-1] one-div-one-head-anima'>
                <img className="absolute top-[-20px] w-full" 
                     src="https://terabyte-web.com/img/background_svg/gradient_5.svg" 
                     width="1366" 
                     height="1015" 
                     alt="gradient_5" />
            </div>
        </div>
    )
}

export default ServicesLanding;