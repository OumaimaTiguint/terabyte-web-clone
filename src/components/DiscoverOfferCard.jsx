import React from 'react';

const DiscoverOfferCard = ({id, title, image, type, date, status, link}) => {
    return (
        <div key={id} className="product-card">
            <a href={link}>
                <img src={image}
                     className='card-img-top mx-auto rounded-lg' />
            </a>
            <div className='w-[99%] flex flex-col gap-3 pt-2'>
                <div className='w-[136px] h-7 px-3 py-1 bg-gray-100 rounded-[36px] shadow justify-center items-center gap-0.5 inline-flex'>
                    <div className="text-center text-blue-800 text-xs font-medium font-['Red Hat Display'] uppercase leading-[18px]">
                        {status}
                    </div>
                </div>
                <h3 className="text-white text-base font-medium font-['Inter'] leading-normal pl-2">
                    {type}  •  {date}
                </h3>
                <p className="text-white text-2xl pl-2 pt-2 w-[100%] h-[110px] font-bold">
                    {title}
                </p>
            </div>
            <a href={link}>
                <button className='nav-btn items-center justify-center float-right !w-[8.5rem]'>
                    Read More
                    <img src='https://terabyte-web.com/img/bi_arrow-up-right.svg' 
                         className='pl-2 pt-1 max-[426px]:hidden' />
                </button>
            </a>
        </div>
    );
};

export default DiscoverOfferCard;