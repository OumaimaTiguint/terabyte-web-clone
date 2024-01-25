import React from 'react';
import ClientsMarquee from './ClientsMarquee';
import { landingData } from '../data/landingData';

function Landing() {
    return (
        <div className='relative flex flex-col justify-center items-center'>
            <div className='max-w-screen-2xl w-full mt-8'>
                <div className='mx-7 sm:mx-16 mr-7 mt-20 relative max-w-xl z-[1] flex flex-col items-center sm:items-start element-to-fade-to-right fade-in-right'>
                    <div className='absolute w-[150%] h-[200%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0B2359] rounded-full blur-[4rem] z-[-1]'></div>
                    <h1 className='text-left sm:text-4xl xs:text-3xl text-2xl font-bold leading-[130%]'>
                        Empowering your online presence with our expertise
                    </h1>
                    <p className='pt-7 opacity-80 text-justify xs:text-base text-sm'>
                        With a wealth of experience crafting compelling web experiences, terabyte Web is a master of creating websites, especially
                        <strong>Umbraco</strong> development, meticulously crafting websites that seamlessly align with your business objectives.
                    </p>
                    <a href="#contact" className="talk-btn mt-12">
                        Let's talk
                    </a>
                </div>
            </div>
            <div className='h-[16rem] bg-transparent'></div>
            <div className='absolute left-0 bottom-0 w-full h-64 bg-gradient-to-b from-transparent to-[#213768] z-10'></div>
            <ClientsMarquee />

            <div className='absolute left-0 top-0 w-full h-64 bg-gradient-to-b from-[#0B2359] to-transparent'></div>
            <div className='absolute w-4/5 h-full -translate-y-1/2 -translate-x-1/2 bg-[#1E73BE] opacity-50 blur-[7rem] rotate-[16deg]'></div>
            <div className='absolute w-[120%] h-[64vh] translate-y-1/3 -translate-x-28 bg-[#13023D] opacity-60 blur-[11.25rem] rotate-6'></div>

            <div className='absolute translate-x-0 -top-1/3 select-none scale-90 md:scale-100'>
                <div className='w-[26.5rem] h-96 relative'>
                {landingData.cards.map((card, index) => (
                    <div key={index}
                         className='w-[26.5rem] h-96 absolute one-div-one-head-anima'
                         style={{
                            '--radius': `${Math.random() * 50}px`,
                            '--speed': `max(8s, ${Math.random() * 10}s)`,
                            '--translateY': `${Math.random() * 1000}px`,
                            
                            animation: `circular-motion var(--speed) linear infinite`,
                            transform: `translate(var(--radius), var(--translateY))`,
                        }}>
                    <div className='w-[26.5rem] h-80 absolute rotate-[-30deg] rounded-3xl object-cover'></div>
                        <img className='w-[26.5rem] h-80 absolute rotate-[-30deg] rounded-3xl object-cover'
                             src={card}
                             width="100%"
                             height="100%" />
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Landing;