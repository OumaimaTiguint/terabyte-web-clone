import React, { useState } from 'react';
import { ContactUs, ServicesLanding } from '../components';

const Home = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <ServicesLanding />
            <ContactUs />
        </>
    )
}

export default Home;