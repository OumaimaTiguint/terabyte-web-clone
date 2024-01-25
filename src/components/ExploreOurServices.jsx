import React from 'react';
import MyRecentWork from './MyRecentWork';

function ExploreOurServices() {
    return (
        <div className='relative sm:pb-40 pb-20 overflow-x-hidden'>
            <div className='relative h-[90vh] flex flex-col justify-center items-center element-to-fade-to-top fade-in-top z-10'>
                <h2 className="sm:text-2xl xs:text-xl text-lg text-center font-semibold leading-10 p-8 text-blue-400">
                    EXPLORE OUR SERVICES
                </h2>
                <h3 className="md:text-6xl xs:text-5xl text-4xl text-center font-extrabold leading-[3.5rem] p-8">
                    Tailored Solutions for Every Organization
                </h3>
                <p className="sm:text-3xl xs:text-2xl text-xl text-center font-medium px-6 leading-10">
                    Empower your organization with our comprehensive web development services.
                </p>
            </div>
            <div className='sm:top-20 top-5 relative z-10'>
                <MyRecentWork />
            </div>
            {/* Background styling */}
            <div className='absolute left-1/2 top-0 -translate-x-1/2 translate-y-[15%] w-full h-[818px] select-none flex'>
                <div className='w-full relative'>
                    <div className='min-[880px]:w-1/2 w-2/3 min-[880px]:h-[29rem] h-[50rem] absolute left-1/2 -translate-x-1/2 translate-y-1/3'>
                        <div className='w-full h-full left-0 top-0 absolute rounded-[100%] border-[1px] border-[#1E73BE] border-solid one-div-circle-anima'></div>
                        <div className='w-full h-full left-0 top-[0.125rem] absolute rounded-[100%] border-[1px] border-[#1E73BE] border-solid one-div-circle-anima'></div>
                        <div className='w-full h-full left-0 top-[0.44rem] absolute rounded-[100%] border-[1px] border-[#1E73BE] border-solid one-div-circle-anima'></div>
                        <div className='w-full h-full left-0 top-[0.94rem] absolute rounded-[100%] border-[1px] border-[#1E73BE] border-solid one-div-circle-anima'></div>
                        <div className='w-full h-full left-0 top-[1.63rem] absolute rounded-[100%] border-[1px] border-[#1E73BE] border-solid one-div-circle-anima'></div>
                        <div className='absolute w-[90%] h-[24rem] left-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#0B2359] blur-[4rem] rounded-[100%] select-none'></div>
                    </div>
                    <div className='w-[130%] min-[880px]:h-[48rem] h-[80rem] absolute left-1/2 -translate-x-1/2 translate-y-0'>
                        <div className='w-full h-full left-0 top-0 absolute rounded-[100%] border-[3px] border-[#1E73BE] border-solid one-div-circle-anima'></div>
                        <div className='w-full h-full left-0 top-[0.18rem] absolute rounded-[100%] border-[3px] border-[#1E73BE] border-solid one-div-circle-anima'></div>
                        <div className='w-full h-full left-0 top-[0.8rem] absolute rounded-[100%] border-[3px] border-[#1E73BE] border-solid one-div-circle-anima'></div>
                        <div className='w-full h-full left-0 top-[1.7rem] absolute rounded-[100%] border-[3px] border-[#1E73BE] border-solid one-div-circle-anima'></div>
                        <div className='w-full h-full left-0 top-[2.8rem] absolute rounded-[100%] border-[3px] border-[#1E73BE] border-solid one-div-circle-anima'></div>
                        <div className='absolute w-[60%] h-[20rem] rounded-[100%] left-1/2 -translate-y-1/3 -translate-x-1/2 bg-[#0B2359] blur-[3rem] select-none'></div>
                    </div>
                </div>
                <div className='w-1/2 h-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute bg-[#1E73BE] bg-opacity-60 rounded-full blur-[64px] select-none z-10'></div>
            </div>
        </div> 
    );
}

export default ExploreOurServices;