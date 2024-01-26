import React from 'react';
import TeamCard from './TeamCard';
import { teamData } from '../data/teamData';

function Team() {
    return (
        <div className='relative flex flex-col px-5'>
            {/* Top Image */}
            <div className='max-w-[67rem] max-h-[37.5rem] w-full rounded-3xl m-auto element-to-fade-to-top fade-in-top'>
                <img className='relative max-w-[67rem] rounded-3xl -top-16'
                     src="https://terabyte-web.com/img/about-img/team-about-img.webp"
                     width="100%"
                     height="100%"
                     alt='team-about-img' />
            </div>
            {/* Text */}
            <div className='flex flex-col justify-center items-center element-to-fade-to-top fade-in-top'>
                <h2 className='text-[#6DBBFF] sm:text-2xl xs:text-xl text-lg font-semibold leading-normal'>
                    THE TEAM
                </h2>
                <h3 className='md:text-6xl xs:text-5xl text-4xl text-center font-extrabold leading-normal'>
                    Meet The Leadership Team
                </h3>
                <p className='sm:text-3xl xs:text-2xl text-xl text-center font-medium mt-6'>
                    Top industry with proven experience who are hands-on in managing projects
                </p>
            </div>
            {/* Cards */}
            <div className='relative max-w-[71.25rem] h-full m-auto gap-x-6 gap-y-20 py-24 flex flex-wrap justify-center'>
                {teamData.map((p, index) => (
                    <TeamCard key={index}
                              id={index}
                              name={p.name}
                              image={p.image}
                              role={p.role} />
                ))}
            </div>
            {/* Background */}
            <div className='absolute lg:top-[-10%] right-0 z-[-1]'>
                <img src="https://terabyte-web.com/img/background_svg/gradient_3.svg"
                     width='1246'
                     height='1636' />
            </div>
            <div className='absolute right-0 -bottom-1/3 z-[-1]'>
                <img src="https://terabyte-web.com/img/background_svg/gradient_4.svg"
                     width='1310'
                     height='1687' />
            </div>
        </div>
    )
}

export default Team;