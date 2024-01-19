import React from 'react';

const OfferExpCard = ({id, title, logo, description}) => {
    return (
        <div key={id} className={`text-white px-5 max-w-[21.4rem] min-h-[21.1rem] pt-[4rem] pb-7 rounded-2xl shadow border-2 ${id % 2 === 0 ? 'border-blue-300' : 'border-white'} flex flex-col items-center element-to-fade-to-top fade-in-top`}>
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
    );
};

export default OfferExpCard;