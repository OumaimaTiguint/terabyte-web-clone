import React, { useState } from 'react';
import { AboutLanding, ContactUs, Team, Loader, OurBrand, OurDevelopers } from '../components';

const AboutUs = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <AboutLanding />
            <Team />
            <OurBrand />
            <OurDevelopers />
            <ContactUs />
        </>
    )
}

export default AboutUs;