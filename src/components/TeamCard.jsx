import React from 'react';

const TeamCard = ({id, name, image, role}) => {
    return (
        <div key={id} className='flex flex-col element-to-fade-to-top fade-in-top'>
            <div className='max-w-[22.75rem] max-h-[25.5rem] w-full h-full'>
                <img src={image} alt={name} width="364" height="410" />
            </div>
            <div className='mt-4'>
                <h4 className='text-white xs:text-2xl text-xl font-bold leading-[31.20px]'>
                    {name}
                </h4>
                <h5 className='text-white xs:text-base text-sm font-medium leading-tight'>
                    {role}
                </h5>
            </div>
        </div>
    );
};

export default TeamCard;