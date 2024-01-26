import React from 'react';

const OurBrandCard = ({id, title, logo, description}) => {
    return (
        <div key={id} className="max-w-[21rem] w-full h-[22rem] flex flex-col justify-end p-6 border-2 border-white element-to-fade-to-top fade-in-top">
            <div>
                <img width="56" 
                    height="56" 
                    alt="ruler&amp;pen-img" 
                    src={logo} />
            </div>
            <div className='mt-4'>
                <h4 className='text-white xs:text-2xl 2xs:text-xl text-lg font-bold leading-[31.20px]'>
                    {title}
                </h4>
                <p className='max-w-[18.5rem] sm:text-lg text-base font-medium leading-7 pt-2 text-justify'>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default OurBrandCard;