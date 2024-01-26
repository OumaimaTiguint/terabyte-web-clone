import React, { useState } from 'react';
import { AboutLanding, ContactUs, Team, Loader } from '../components';

const AboutUs = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <AboutLanding />
            <Team />
            <ContactUs />
        </>
    )
}

export default AboutUs;