import React, { useState } from 'react';
import { ContactUs, ServicesLanding, WhatWeOffer } from '../components';

const Home = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <ServicesLanding />
            <WhatWeOffer />
            <ContactUs />
        </>
    )
}

export default Home;