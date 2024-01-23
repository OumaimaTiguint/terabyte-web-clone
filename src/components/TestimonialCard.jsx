import React from 'react';

const TestimonialCard = ({id, name, role, company, picture, message, rating}) => {
    return (
        <div key={id} className={`one-tes-card ${id % 2 === 0 ? 'bg-[#091242]' : 'bg-[#f4f4f5]'}`}>
            <div key={id} className={`relative ${id % 2 === 0 ? 'one-content-card-even' : 'one-content-card-odd'}`}>
                <div className='flex xs:justify-between justify-center items-center w-full'>
                    <div className={`${id % 2 === 0 ? 'text-white' : 'text-blue-900'} relative flex items-center xs:flex-row flex-col gap-2`}>
                        <img className="h-24 w-24 rounded-full" 
                             src={picture}
                             alt={name}
                             width="150" 
                             height="150" />
                        <div className='relative xs:text-left text-center justify-start flex flex-col xs:items-start items-center'>
                            <h4 className='text-xl font-bold '>{name}</h4>
                            <h5 className="text-base font-bold leading-normal">{role} - {company}</h5>
                        </div>
                    </div>
                    <div className='relative hidden xs:block'>
                        {id % 2 === 0 ? (
                            <img className="tes-quote-img" 
                                 src="https://terabyte-web.com/img/home/tes/quote-even.svg" 
                                 alt="quote-img" 
                                 width="73" 
                                 height="74" />
                        ) : (
                            <img className="tes-quote-img" 
                                 src="https://terabyte-web.com/img/home/tes/quote.svg" 
                                 alt="quote-img" 
                                 width="73" 
                                 height="74" />
                        )}
                    </div>
                </div>
                <div className='flex flex-col relative h-full'>
                    <p className='relative max-w-[456px] min-h-[200px] h-full text-slate-500 text-base text-justify font-medium leading-normal'>
                        {message}
                    </p>
                    <div className='relative mt-8'>
                        <img src={`https://terabyte-web.com/img/home/tes/${rating}-stars.svg`} 
                             alt={`${rating}-stars-img`} 
                             width="180" 
                             height="35" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;