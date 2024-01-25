import React, { useEffect, useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import OfferExpCard from './OfferExpCard';
import { offerExplanationData } from '../data/offerExplanationData';
import { countingLpcData } from '../data/countingLpcData';
import CountUp from 'react-countup';

function OfferExplanation() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const element = document.getElementById('count');

        if (element) {
            const elementPosition = element.offsetTop;

            if (scrollPosition > elementPosition - window.innerHeight / 2) {
                setIsVisible(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='relative pt-8 mx-auto flex flex-col md:flex-row'>
            <div className='w-full sm:px-16 px-4'>
                <h4 className='text-center sm:text-3xl xs:text-2xl text-xl font-medium leading-10 px-7 mb-20'>
                    Let’s Create good products Together, From Day 1
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {offerExplanationData.map((offer) => (
                        <OfferExpCard key={offer.id}
                                      id={offer.id}
                                      title={offer.title}
                                      logo={offer.logo}
                                      description={offer.description} />
                    ))}
                </div>
                
                <ScrollTrigger onEnter={() => setIsVisible(true)} onExit={() => setIsVisible(false)}>
                    <div className={`relative w-full flex flex-wrap m-auto justify-center items-center gap-5 mt-20 mb-36 ${isVisible ? 'fade-in-top element-to-fade-to-top' : ''}`}
                         id="count">
                        {countingLpcData.map((e) => (
                            <div key={e.id} className='h-16 justify-center items-center gap-1 flex text-white'>
                                {e.id === 2 ? (
                                    <>
                                        <span className='text-right sm:text-[50px] xs:text-4xl text-3xl font-semibold'>+</span>
                                        <CountUp end={e.number} duration={2} separator="," delay={0.3}>
                                            {({ countUpRef }) => (
                                                <h3 ref={countUpRef} className='text-right sm:text-[50px] xs:text-4xl text-3xl font-semibold'></h3>
                                            )}
                                        </CountUp>
                                </>
                                ) : (
                                    <h3 className='text-right sm:text-[50px] xs:text-4xl text-3xl font-semibold'>{e.number}</h3>
                                )}
                                <div className='w-5 h-5 bg-blue-200'></div>
                                <p className='sm:text-xl xs:text-lg text-base font-normal'>{e.title}</p>
                            </div>
                        ))}
                    </div>
                </ScrollTrigger>
            </div>
        </div>
    );
}

export default OfferExplanation;