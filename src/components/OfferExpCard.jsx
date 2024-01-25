import React, { useEffect, useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const OfferExpCard = ({id, title, logo, description}) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const element = document.getElementById('offerExplanation');

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
        <ScrollTrigger onEnter={() => setIsVisible(true)} onExit={() => setIsVisible(false)}>
            <div key={id} className={`px-5 h-full w-full max-w-[21.4rem] min-h-[21.1rem] pt-[4rem] pb-7 rounded-2xl shadow border-2 ${id % 2 === 0 ? 'border-blue-300' : 'border-white'} flex flex-col items-center ${isVisible ? 'fade-in-top element-to-fade-to-top' : ''}`}>
                <div className='flex items-center justify-center'>
                    <img src={logo} alt={title} height="56" width="56" />
                </div>
                <h3 className={`text-center sm:text-2xl text-xl font-semibold leading-normal py-2 ${id % 2 === 0 ? 'text-white' : 'text-blue-300'}`}>
                    {title}
                </h3>
                <p className='max-w-[18.5rem] text-center sm:text-lg text-base font-medium leading-loose pt-2'>
                    {description}
                </p>
            </div>
        </ScrollTrigger>
    );
};

export default OfferExpCard;