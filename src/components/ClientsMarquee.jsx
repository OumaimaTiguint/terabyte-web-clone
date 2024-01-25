import React from 'react';
import Marquee from 'react-fast-marquee';
import { clientsData } from '../data/clientsData';

function ClientsMarquee() {
    return (
        <div className='marquee-container flex flex-col items-center justify-center py-5 z-20 overflow-x-hidden'>
            
            <div className='flex items-center justify-center w-full'>
                <div className='w-full'>
                    <Marquee gradient={false}
                             speed={50}
                             pauseOnHover={false}
                             pauseOnClick={false}
                             delay={0}
                             play={true}
                             direction="left">
                        {clientsData.map((item, id) => (
                            <div className='mx-3 flex flex-col items-center justify-center p-2 transition-transform duration-300 ease-in-out hover:scale-115'
                                 key={id}>
                                <img src={item}
                                     className='h-[2.5rem] pointer-events-none'/>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}

export default ClientsMarquee;