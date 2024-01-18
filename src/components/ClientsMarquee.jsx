import React from 'react';
import Marquee from 'react-fast-marquee';
import { clientsData } from '../data/clientsData';

function ClientsMarquee() {
    return (
        <div className='flex flex-col items-center justify-center min-h-[60vh] p-2.5 md:p-2'>
            
            <div className='skillsContainer flex items-center justify-center w-full mt-5 p-2 md:p-1.5'>
                <div className='skill--scroll w-full mx-2 md:mx-0'>
                    <Marquee gradient={false}
                             speed={50}
                             pauseOnHover={false}
                             pauseOnClick={false}
                             delay={0}
                             play={true}
                             direction="left">
                        {clientsData.map((item, id) => (
                            <div className=' m-1.5 flex flex-col items-center justify-center p-2 transition-transform duration-300 ease-in-out hover:scale-115'
                                 key={id}>
                                <img src={item}
                                     className='h-24 w-24 pointer-events-none'/>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}

export default ClientsMarquee;