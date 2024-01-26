import React, { useState } from 'react';
import { CardTalkWithUs, ClientsMarquee, ContactUs, ExploreOurServices, InternationalTeam, Landing, OfferExplanation, Testimonials, WhySection } from '../components';
import { homeTalkWithUsData } from '../data/homeTalkWithUsData';

const Home = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Landing />
            <InternationalTeam />
            <ExploreOurServices />
            <OfferExplanation />
            <div className='flex flex-col justify-center items-center mb-8'>
                <h2 className='text-blue-300 text-center sm:text-2xl xs:text-xl text-lg font-semibold leading-10 p-8 element-to-fade-to-top fade-in-top'>
                    SOME OF OUR CLIENTS
                </h2>
            </div>
            <ClientsMarquee />
            <CardTalkWithUs header={homeTalkWithUsData.header} body={homeTalkWithUsData.body}  />
            <WhySection />
            <Testimonials />
            <ContactUs />
        </>
    )
}

export default Home;