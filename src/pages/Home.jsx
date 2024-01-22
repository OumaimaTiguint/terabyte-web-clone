import React, { useState, useEffect } from 'react';
import { CardTalkWithUs, ClientsMarquee, ExploreOurServices, InternationalTeam, Loader, MyRecentWork, OfferExplanation, WhySection } from '../components';

const Home = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <ClientsMarquee />
            <InternationalTeam />
            <ExploreOurServices />
            <MyRecentWork />
            <OfferExplanation />
            <div className='flex flex-col justify-center items-center mb-8'>
                <h2 className='text-blue-300 text-center sm:text-2xl xs:text-xl text-lg font-semibold leading-10 p-8 element-to-fade-to-top fade-in-top'>
                    SOME OF OUR CLIENTS
                </h2>
            </div>
            <ClientsMarquee />
            <CardTalkWithUs />
            <WhySection />
        </>
    )
}

export default Home;