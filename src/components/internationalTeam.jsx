import React from 'react';
import { internationalTeamData } from '../data/internationalTeamData';

function InternationalTeam() {
    return (
        <div className='h-[70vh] sm:h-[90vh] items-center justify-center text-white'>
            <div className='flex flex-col md:flex-row items-center justify-center h-full'>
                <div className='flex-2 h-1/2 md:h-full my-auto flex md:flex-col flex-row items-end justify-center'>
                    <div className='flex content-center justify-center items-center'>
                        <img src="../assets/video-placeholder.jpg"
                             alt="video placeholder" 
                             width="90%"
                             height="100%"
                             className='object-cover z-10 m-6 shadow-lg rounded-lg' />
                    </div>
                </div>
                <div className='flex-2 flex flex-col items-end justify-center'>
                    <div className='lcr-content w-full'>
                        <h6 className="font-bold text-blue-300">
                            {internationalTeamData.header}
                        </h6>
                        <h1 className="font-extrabold text-4xl leading-110%">
                            {internationalTeamData.subheader}
                        </h1>
                        <p className="mt-5 font-medium  opacity-70">
                            {internationalTeamData.body}
                        </p>
                        <div className="mt-5 flex justify-center lg:justify-end">
                            <button className='bg-[#325588] text-[#b3c0d3] rounded-full shadow-lg py-2 px-4 transition-transform transform hover:scale-105 hover:opacity-80 hover:border hover:border-white hover:text-white'>
                                More about us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InternationalTeam;