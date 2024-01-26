import React, { useState } from 'react';
import { AboutLanding, ContactUs, Team, Loader, OurBrand } from '../components';

const AboutUs = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <AboutLanding />
            <Team />
            <OurBrand />
            <ContactUs />
        </>
    )
}

export default AboutUs;