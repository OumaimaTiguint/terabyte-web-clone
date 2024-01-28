import React from 'react';

const UmbracoServiceCard = ({id, image, title, description}) => {
    return (
        <div key={id} className='card flex flex-col items-center md:basis-[45%] lg:basis-[30.5%] gap-[25px]'>
            <img className='w-[100%] h-[21rem] rounded-[30px] shadow border border-neutral-200'
                 src={image}
                 height="100%"
                 width="100%" />
            <div className='flex flex-col justify-center items-center space-y-6 px-4'>
                <h3 className='text-center text-2xl text-white font-bold capitalize h-[3rem]'>
                    {title}
                </h3>
                <p className='text-justify text-white text-base font-normal capitalize'>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default UmbracoServiceCard;