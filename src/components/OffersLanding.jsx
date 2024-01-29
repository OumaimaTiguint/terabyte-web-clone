import React from 'react';

function OffersLanding() {
    return (
        <div className='relative bg-cover pb-16 pt-32'
             style={{ backgroundImage: 'url(assets/offers-landing.png)' }}>
            <div className='sm:w-[80%] max-w-[1440px] mt-16 mx-3 pt-16 sm:mx-auto relative element-to-fade-to-top fade-in-top'>
                <div className='sm:mx-auto max-w-[1440px] w-full mb-32 space-y-12'>
                    <h1 className="max-w-[1021px]  text-white text-[39px] font-extrabold font-['inter'] leading-[50px]">
                        Unleash the Power of Your Business with Our Exclusive Offers
                    </h1>
                    <div className="sm:w-[80%] opacity-80 text-justify text-white text-base font-medium font-['Inter']">
                        Unlock a world of possibilities and propel your business to new heights with our curated selection of
                        exclusive offers. Whether you're seeking to boost your online presence, optimise your operations, or unlock
                        innovative solutions, explore our offerings and discover the perfect fit to empower your business journey.
                    </div>
                    <a href="#contact" className="talk-btn mt-6">
                        Let's talk
                    </a>
                </div>
            </div>
            <div className='w-full h-1/6 absolute bottom-0 left-0 bg-gradient-to-t from-[#0B2359] to-transparent mt-[10%] md:block hidden element-to-fade-to-top fade-in-top'></div>
        </div>
    )
}

export default OffersLanding;