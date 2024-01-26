import React from 'react';

function AboutLanding() {
    return (
        <div className='relative w-full h-[58.75rem] flex flex-col justify-center'>
            <div className='relative pt-24 pb-0 md:px-24 px-10 element-to-fade-to-right fade-in-right'>
                <h1 className='md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-extrabold lg:leading-[70px]'>
                    We are talented. We are experienced.<br/>
                    We are bold. We are TeraByte!
                </h1>
                <p className='md:text-[28px] sm:text-2xl xs:text-xl text-lg font-medium leading-normal mt-4'>
                    Get a behind-the-scenes glimpse of your new favourite software development company.
                </p>
                <a href="#contact" className="talk-btn mt-12">
                    Let's talk
                </a>
            </div>
            {/* Background */}
            <div className='top-0 absolute w-full h-[58.75rem] z-[-1] shrink-0'>
                <div className='absolute h-[58.75rem] w-full bg-cover'
                     style={{ backgroundImage: 'url(https://terabyte-web.com/img/about-img/main-about-img.webp)' }}></div>
                <div className='absolute w-full h-[58.75rem] bg-gradient-to-b from-[#0B2359] to-transparent'></div>
            </div>
        </div>
    )
}

export default AboutLanding;