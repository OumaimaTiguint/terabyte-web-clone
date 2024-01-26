import React, { useState } from 'react';
import { ContactUs, Testimonials, UmbracoLanding } from '../components';

const Umbraco = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <UmbracoLanding />
            <Testimonials />
            <ContactUs />
        </>
    )
}

export default Umbraco;