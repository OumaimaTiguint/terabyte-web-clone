import React, { useState } from 'react';
import { ContactUs, Testimonials, UmbracoLanding, UmbracoServices } from '../components';

const Umbraco = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <UmbracoLanding />
            <UmbracoServices />
            <Testimonials />
            <ContactUs />
        </>
    )
}

export default Umbraco;