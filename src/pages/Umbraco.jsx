import React, { useState } from 'react';
import { ContactUs, Testimonials, UmbracoLanding, UmbracoServiceDetails, UmbracoServices } from '../components';

const Umbraco = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <UmbracoLanding />
            <UmbracoServices />
            <UmbracoServiceDetails />
            <Testimonials />
            <ContactUs />
        </>
    )
}

export default Umbraco;