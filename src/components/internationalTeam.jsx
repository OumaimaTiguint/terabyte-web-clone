import React, { useRef, useState } from 'react';
import { internationalTeamData } from '../data/internationalTeamData';

function InternationalTeam() {
    const videoRef = useRef(null);
    const [isVideoPaused, setIsVideoPaused] = useState(true);

    const handleTriangleClick = () => {
        const video = videoRef.current;

        if (video) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }

            setIsVideoPaused(video.paused);
        }
    };

    return (
        <div className='relative sm:pb-96 pb-40 overflow-x-hidden'>
            <div className='relative'>
                <div className='flex lg:flex-nowrap flex-wrap relative items-center justify-center my-24 z-10'>
                    <div className='relative mx-7 overflow-hidden max-w-[36.75rem] h-auto lg:h-[25.5rem] xs:rounded-[69px] rounded-[40px] flex items-center justify-center border border-white border-opacity-10 element-to-fade-to-top fade-in-top'>
                        <video ref={videoRef}
                               className='w-full h-full object-cover'
                               id='tera-video'
                               loop
                               playsInline
                               muted>
                            <source src='https://terabyte-web.com/vid/intro-terabyte.mp4'></source>
                        </video>
                        <div id="tera_btn"
                             className={`btn-tera-video ${isVideoPaused ? 'opacity-80' : 'opacity-0'}`}
                             onClick={handleTriangleClick}>
                            <div className="absolute w-20 h-20 bg-white bg-opacity-30 border-[1px] border-white border-opacity-30 rounded-full flex items-center justify-center">
                                <img src="https://terabyte-web.com/img/home/triangle.svg"
                                     width="21"
                                     height="26"
                                     alt="video_triangle" />
                            </div>
                        </div>
                    </div>
                    <div className='pt-7 mx-7 relative max-w-xl flex flex-col shrink element-to-fade-to-top fade-in-top'>
                        <h2 className="sm:text-xl xs:text-lg text-base font-extrabold leading-10 text-blue-300">
                            {internationalTeamData.header}
                        </h2>
                        <h3 className="sm:text-4xl xs:text-3xl text-2xl font-extrabold leading-10">
                            {internationalTeamData.subheader}
                        </h3>
                        <p className="pt-7 opacity-80 text-justify xs:text-base text-sm">
                            {internationalTeamData.body}
                        </p>
                        <div className="flex sm:justify-end justify-center mt-9">
                            <a href="./about-us"
                               className="relative w-36 h-10 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center opacity-70  text-sm font-medium shining-btn">
                                More about us
                            </a>
                        </div>
                    </div>
                </div>
                <div className='bg-[#1E73BE] opacity-50 absolute w-[70rem] h-[40rem] -top-[30%] right-0 -rotate-[25deg] blur-[5rem] rounded-full'></div>
            </div>
        </div>
    );
}

export default InternationalTeam;
