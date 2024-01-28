import React from 'react';

const ServiceDetailCard = ({id, image, title, description, list = [], description2}) => {
    return (
        <a key={id} 
           href='#' 
           className={`flex flex-col items-center bg-white border-gray-200 shadow ${id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:h-[350px]`}>
            <div className='flex flex-col justify-between leading-normal flex-1 h-full w-full'>
                <img className='object-cover h-full w-full half-image active'
                     src={image}
                     height="100%"
                     width="100%" />
            </div>
            <div className='flex flex-col justify-between p-4 leading-normal w-full md:w-1/2'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {title}
                </h5>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify'>
                    {description}
                </p>

                {list.length && (
                    <ul className='list-disc font-normal text-gray-700 dark:text-gray-400 pl-8'>
                        {list.map((e, index) => (
                            <li key={index}>{e}</li>
                        ))}
                    </ul>
                )}

                {description2 && (
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                        {description2}
                    </p>
                )}
            </div>
        </a>
    );
};

export default ServiceDetailCard;