import React from 'react';
import { whySectionData } from '../data/whySectionData';
import WhyCard from './WhyCard';

function WhySection() {
    return (
        <div className='min-h-[100vh] items-center justify-center text-white'>
            <div className='flex flex-col md:flex-row items-center justify-center h-full'>
                <div className='flex-2 h-1/2 md:h-full my-auto flex md:flex-col flex-row items-end justify-center'>
                    <div className='flex content-center justify-center items-center'>
                        <div className='relative min-[550px]:w-[500px] min-[550px]:h-[500px] w-[91vw] h-[85vw] bg-gradient-to-b from-white to-transparent rounded-full shrink-0 top-16'
                             style={{ transition: 'transform 0.3s ease-in-out 0s', transform: 'translate(0px, 0px)' }}>
                            <div className='relative w-full'
                                 style={{ transition: 'transform 0.3s ease-in-out 0s', transform: 'translate(0px, 0px)' }}>
                                <img src={whySectionData.image}
                                     alt="jumping man" 
                                     width="100%"
                                     height="100%"
                                     className='absolute w-full left-1/2 -translate-x-1/2 -translate-y-[15%]' />
                            </div>
                            <div className='absolute xs:h-[100px] h-14 px-5 bg-[#0D306A] justify-center items-center gap-5 inline-flex -left-12 top-12'
                                 style={{ transition: 'transform 0.3s ease-in-out 0s', transform: 'translate(0px, 0px)' }}>
                                <div className='xs:w-[60px] xs:h-[60px] w-12 h-12 relative rounded-full'>
                                    <img src="https://terabyte-web.com/img/home/why/data.svg"
                                         alt='data-img'
                                         width="60"
                                         height="61"/>
                                </div>
                                <div className="xs:text-xl text-base font-bold ">+ 2500 Delivered Days</div>
                            </div>
                            <div className='absolute xs:h-[100px] h-14 px-5 bg-[#0D306A] justify-center items-center gap-5 inline-flex -right-6 bottom-6'
                                 style={{ transition: 'transform 0.3s ease-in-out 0s', transform: 'translate(0px, 0px)' }}>
                                <div className='xs:w-[60px] xs:h-[60px] w-12 h-12  relative rounded-full'>
                                    <img src="https://terabyte-web.com/img/home/why/visitors.svg"
                                         alt='visitors-img'
                                         width="60"
                                         height="60"/>
                                </div>
                                <div className="xs:text-xl text-base font-bold ">100k+ Visitors</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-2 flex flex-col items-end justify-center'>
                    <div className='relative ml-[8%] lg:mt-24 mt-52 element-to-fade-to-top fade-in-top'>
                        <h3 className="xs:text-[43px] text-3xl font-bold leading-[50px] py-11">
                            {whySectionData.header}
                        </h3>
                        {whySectionData.body.map((paragraph, index) => (
                            <p key={index} 
                               className="max-w-[38.75rem] xs:text-[17px] text-sm font-medium leading-normal mb-10">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            <div className='relative flex justify-center items-center mt-56'>
                <div className='gap-14 flex flex-wrap max-w-4xl'>
                    {/* Left cards */}
                    <div className='gap-14 flex flex-col'>
                        {whySectionData.cards.map((card, index) => 
                            index % 2 === 0 && (
                                <WhyCard key={index}
                                         id={index}
                                         title={card.title}
                                         logo={card.logo}
                                         description={card.description} />
                            )
                        )}
                    </div>

                    {/* Right cards */}
                    <div className='min-[831px]:mt-44 gap-14 flex flex-col'>
                        {whySectionData.cards.map((card, index) => 
                            index % 2 !== 0 && (
                                <WhyCard key={index}
                                         id={index}
                                         title={card.title}
                                         logo={card.logo}
                                         description={card.description} />
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhySection;