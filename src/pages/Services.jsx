import React, { useState } from 'react';
import { CardTalkWithUs, ContactUs, OurProcess, ServicesLanding, WhatWeOffer } from '../components';
import { servicesTalkWithUsData } from '../data/servicesTalkWithUsData';

const Home = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <ServicesLanding />
            <WhatWeOffer />
            {/* Background */}
            <div className='absolute bottom-0-0 left-[-20px] z-10 md:w-[43.5rem] one-div-one-head-anima'>
                <img className='relative top-0 left-0 w-full blur-sm'
                     src='https://terabyte-web.com/img/background_svg/gradient_6.svg'
                     width='696'
                     height='1417' />
            </div>
            <CardTalkWithUs header={servicesTalkWithUsData.header} body={servicesTalkWithUsData.body} />
            <OurProcess />
            <ContactUs />
        </>
    )
}

export default Home;