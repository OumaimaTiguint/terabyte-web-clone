import React from 'react';

const CardTalkWithUs = ({header, body}) => {
    return (
        <div className='relative pt-8 flex flex-col items-center'>
            <div className='w-full flex justify-center p-3'>
                <div className='z-10 max-w-screen-2xl w-full p-5 pt-20 pb-28 mt-48 bg-tera-container-to-tr rounded-3xl border border-white border-opacity-10 flex flex-col justify-center items-center element-to-fade-to-top fade-in-top z-1'>
                    <h2 className='text-center sm:text-[43px] xs:text-4xl text-3xl font-extrabold leading-[50px]'>
                        {header}
                    </h2>
                    <p className='max-w-[1004px] text-center sm:text-2xl xs:text-xl text-lg font-normal leading-9 pt-14'>
                        {body}
                    </p>

                    <div className="relative w-full flex justify-center mt-9 z-10">
                        <a href="#contact" 
                           className="absolute py-3 px-10 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center  text-sm font-semibold shining-btn">
                            Let's Talk
                        </a>
                    </div>
                </div>
            </div>
            {/* Gradient on the left */}
            <div className='absolute left-0 scale-x-125'>
                <img src="https://terabyte-web.com/img/background_svg/gradient_1.svg"
                     width="806"
                     height="1687"
                     alt='gradient' />
            </div>
            {/* Gradient on the bottom */}
            <div className='w-full h-[16.7rem] absolute bottom-0 bg-gradient-to-t from-[#0B2359] to-[#0B2359] z-[-1]'></div>
        </div>
    );
};

export default CardTalkWithUs;