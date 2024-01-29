import React from 'react';
import { internationalTeamData } from '../data/internationalTeamData';

function InternationalTeam() {
    return (
        <div className='relative h-[70vh] sm:h-[90vh] items-center justify-center px-4'>
            <div className='relative flex flex-col md:flex-row items-center justify-center h-full'>
                <div className='flex-2 h-1/2 md:h-full my-auto flex md:flex-col flex-row items-end justify-center'>
                    <div className='flex content-center justify-center items-center'>
                        <img src="../assets/video-placeholder.jpg"
                             alt="video placeholder" 
                             width="90%"
                             height="100%"
                             className='object-cover z-10 m-6 shadow-lg rounded-lg' />
                    </div>
                </div>
                <div className='flex-2 flex flex-col items-end justify-center z-10'>
                    <div className='lcr-content w-full'>
                        <h6 className="font-bold text-blue-300">
                            {internationalTeamData.header}
                        </h6>
                        <h1 className="font-extrabold text-4xl leading-110%">
                            {internationalTeamData.subheader}
                        </h1>
                        <p className="mt-5 font-medium opacity-70">
                            {internationalTeamData.body}
                        </p>
                        <div className="mt-5 flex justify-center lg:justify-end">
                            <a href="./about-us" 
                               className="relative w-36 h-10 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center opacity-70  text-sm font-medium shining-btn">
                                More about us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#1E73BE] opacity-50 absolute w-[70rem] h-[40rem] -top-[30%] right-0 -rotate-[25deg] blur-[5rem] rounded-full'></div>
        </div>
    );
}

export default InternationalTeam;