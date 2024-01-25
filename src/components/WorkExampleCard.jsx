import React from 'react';

const WorkExampleCard = ({id, title, image}) => {
    return (
        <div key={id} className="element-to-fade-to-top fade-in-top relative bg-gray-500 rounded-lg shadow-md items-center m-4 md:w-1/3 w-full hover:bg-blue-800 hover:scale-110 h-[300px]">
            <div className='flex items-center justify-center'>
                <img src={image} alt={title} className="object-contain rounded-t-lg" />
            </div>
            <div className='absolute h-16 w-full bottom-0 rounded-b-3xl bg-opacity-30 bg-black hover:bg-blue-800 hover:bg-opacity-40 flex justify-center items-center'>
                <p className="font-semibold text-lg">{title}</p>
            </div>
        </div>
    );
};

export default WorkExampleCard;