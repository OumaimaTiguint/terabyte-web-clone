import React from 'react';

const CardTalkWithUs = () => {
    return (
        <div className='w-full flex justify-center p-3 text-white'>
            <div className='max-w-screen-2xl w-full p-5 pt-20 pb-28 mt-48 bg-tera-container-to-tr rounded-3xl border border-white border-opacity-10 flex flex-col justify-center items-center element-to-fade-to-top fade-in-top'>
                <h2 className='text-center sm:text-[43px] xs:text-4xl text-3xl font-extrabold leading-[50px]'>
                    Talk with us Freely without obligation
                </h2>
                <p className='max-w-[1004px] text-center sm:text-2xl xs:text-xl text-lg font-normal leading-9 pt-14'>
                    We are at your service to discuss, analyze, propose, decipher, draw the roadmap or just advise you. Lets talk even if you are just curious. We have a saying that goes: Even if you're not buying you benefit.
                </p>

                <div className="mt-12 flex justify-center">
                    <button className='bg-[#325588] text-[#b3c0d3] rounded-full shadow-lg py-2 px-10 transition-transform transform hover:scale-105 hover:opacity-80 hover:border hover:border-white hover:text-white'>
                        Let's Talk
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardTalkWithUs;