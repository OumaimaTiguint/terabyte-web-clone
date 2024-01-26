import React, { useState } from 'react';

function OurDevelopers() {
    const [isVideoVisible, setVideoVisible] = useState(false);

    const handleTriangleClick = () => {
        console.log('here')
        setVideoVisible(!isVideoVisible);
    };

    return (
        <div className='relative w-full flex flex-col items-center justify-center pt-[15vw] px-6'>
            <div className='max-w-screen-2xl w-full pt-20 pb-28 mt-48 bg-tera-container-to-tr rounded-3xl border border-white border-opacity-10 flex flex-col justify-center items-center px-4 element-to-fade-to-top fade-in-top'>
                <h2 className='text-[#6DBBFF] sm:text-2xl xs:text-xl text-lg text-center font-semibold leading-10'>
                    OUR BRAND
                </h2>
                <h3 className='md:text-6xl xs:text-5xl text-4xl text-center font-extrabold mt-8'>
                    Take a quick look at our Brand Pillars
                </h3>
                <p className='max-w-[63.5rem] text-center text-white sm:text-[20px] xs:text-lg text-base font-normal leading-9 mt-5'>
                    TeraByte Web is, like other companies, established with earnings in focus,
                    but unlike others, we value support, help, service, and reputation higher
                    than earnings. We do not consider year-long experiences or heavy
                    background-knowledgeas tools for inflicting further costs on our partners.
                </p>
                <div className='relative w-full flex justify-center mt-9 z-10'>
                    <a className='absolute py-3 px-10 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center text-white text-sm font-semibold shining-btn'
                       href='#contact'>
                        Let's Talk
                    </a>
                </div>
            </div>
            <div className='relative flex flex-col justify-center items-center w-full h-full max-w-screen-2xl py-44'>
                <div className='max-w-[60rem] element-to-fade-to-top fade-in-top'>
                    <h2 className='text-[#6DBBFF] sm:text-2xl xs:text-xl text-lg text-center font-semibold leading-[50px]'>
                        GROW TOGETHER
                    </h2>
                    <h3 className='text-[39px] font-extrabold text-center leading-[50px]'>
                        Core Values
                    </h3>
                    <p className='opacity-80 text-justify justify-last text-white sm:text-lg text-base font-medium mt-4'>
                        Our core values are a reflection of our mindsets. Our values aren’t a set of fictional slogans.
                        They are an implicit set of behavior expressed every single day through our actions as we
                        collectively strive towards continual improvement and perfectionism.We see the
                        responsibility as an honor and a privilege that we will not compromise with.
                    </p>
                </div>
                {/* Video */}
                <div className='flex items-end absolute bottom-4 element-to-fade-to-top fade-in-top'>
                    <div className='cursor-pointer relative w-24 h-24 bg-white bg-opacity-30 border-[1px] border-white border-opacity-30 rounded-full flex items-center justify-center shining-btn'
                         id='video-core-start'
                         onClick={handleTriangleClick}>
                        <img src="https://terabyte-web.com/img/home/triangle.svg" 
                             width="21" 
                             height="26" 
                             alt="video_triangle" 
                             className="active" />
                    </div>
                </div>
                <div id='video-core-value' 
                     className={`w-screen h-screen left-0 top-0 fixed bg-[#0B2359] bg-opacity-90 z-10 transition-all`}
                     style={{ opacity: isVideoVisible ? 1 : 0, visibility: isVideoVisible ? 'visible' : 'hidden' }}>
                    <div id='video-core-close' 
                         onClick={handleTriangleClick}
                         className='z-10 h-12 w-12 absolute right-8 top-8 cursor-pointer bg-white bg-opacity-30 border-[1px] border-white border-opacity-30 rounded-full flex items-center justify-center shining-btn'>
                        <img width="100%" 
                             height="100%" 
                             alt="close_X-img" 
                             src="https://terabyte-web.com/img/home/close_X.svg" 
                             className="active" />
                    </div>
                    <video className='w-full h-full'
                           id='tera-video'
                           loop
                           playsInline
                           muted>
                        <source src='https://terabyte-web.com/vid/intro-terabyte.mp4'></source>
                    </video>
                </div>
            </div>
            {/* Background */}
            <div className='top-0 absolute w-full h-[59rem] z-[-1]'>
                <div className='absolute w-full h-[59rem] bg-cover'
                     style={{ backgroundImage: 'url(https://terabyte-web.com/img/about-img/second-about-img.webp)' }}>
                    <div className='absolute w-full h-[59rem] bg-gradient-to-b from-[#0B2359] to-transparent'></div>
                    <div className='absolute w-full h-[59rem] bg-gradient-to-t from-[#0B2359] to-transparent'></div>
                </div>
            </div>
        </div>
    )
}

export default OurDevelopers;