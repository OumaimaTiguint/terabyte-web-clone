import React from 'react';

const WhyCard = ({id, title, logo, description}) => {
    return (
        <div key={id} className='text-white why-gradient-full-card element-to-fade-to-top fade-in-top'>
            <div className='absolute -top-12 -left-12 z-[1]'>
                <img src={logo} alt={title} width="156" height="160" />
            </div>
            <div className='relative flex min-h-[25.6rem] w-full max-w-[22.75rem] items-center justify-center overflow-hidden rounded-lg border border-white border-opacity-10 bg-gradient-to-tl from-[rgba(255,255,255,0.24)] via-transparent to-[rgba(255,255,255,0.00)] p-9 font-extrabold'
                 style={{ borderRadius: '1.5rem' }}>
                <div className='max-w-[17rem]'>
                    <h4 className='sm:text-[27px] xs:text-2xl text-xl font-black '>
                        {title}
                    </h4>
                    <p className='sm:text-base xs:text-lg text-sm font-medium leading-[29px] pt-8'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyCard;