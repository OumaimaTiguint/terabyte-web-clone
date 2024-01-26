import React from 'react';

function UmbracoLanding() {
    return (
        <div className='hero relative bg-cover bg-center pb-[8vw]' 
             style={{ backgroundImage: 'url(https://terabyte-web.com/img/about-img/main-about-img.webp)' }}>
            <div>
                <img src='assets/umbraco-img.svg' />
            </div>
            <div className='grid mx-auto place-items-start xl:place-items-center lg:grid-cols-2 px-5 md:px-20 z-10 -mt-20 sm:-mt-28 lg:-mt-[10rem] gap-y-8 md:gap-x-6 w-full xl:w-[1240px]'>
                <div className='flex items-center justify-center'>
                    <div className='flex flex-col justify-center space-y-8 fade-in-right'>
                        <h1 className='text-white text-[1.6rem] xl:text-[2.875rem] font-bold md:text-[2.5rem]'>
                            Umbraco is the #1 Microsoft open source CMS in the world,
                        </h1>
                        <p className='text-[#E0E5F3] font-normal leading-10 text-base md:text-lg xl:text-xl'>
                            <strong>Umbraco</strong>
                            , also known as "The Friendly CMS", is the leading open-source ASP.NET CMS in the world.
                        </p>
                        <button className='bg-[#6DBBFF] text-base font-medium text-[#0A142F] text-center w-[9rem] h-[3rem] xl:w-[10.5rem] rounded-full flex justify-center items-center max-[768px]:hidden'>
                            Let's talk
                            <img src="assets/lets-talk-arrow.svg" />
                        </button>
                    </div>
                </div>
                <div className='flex max-[768px]:flex-col md:justify-center md:items-center w-full md:h-full max-[769px]:space-y-6'>
                    <img src="https://terabyte-web.com/img/umbraco_services/1-section-umbraco.webp" 
                         alt="" 
                         className="w-full rounded-[30px]" 
                         width="100%" 
                         height="100%" />
                    <div className='flex items-center justify-center min-[768px]:hidden'>
                        <button className='bg-[#6DBBFF] text-base font-medium text-[#0A142F] text-center w-[9rem] h-[3rem] rounded-full flex justify-center items-center'>
                            Let's talk
                            <img src="assets/lets-talk-arrow.svg" />
                        </button>
                    </div>
                </div>
            </div>
            {/* TODO: fix background color */}
            {/* Background */}
            <div className='w-full h-1/6 absolute bottom-0 left-0 bg-gradient-to-t from-[#0B2359] to-transparent'></div>
        </div>
    )
}

export default UmbracoLanding;