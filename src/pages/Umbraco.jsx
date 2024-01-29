import React, { useState } from 'react';
import { ContactUs, Testimonials, UmbracoLanding, UmbracoServiceDetails, UmbracoServices, WhyUmbraco } from '../components';

const Umbraco = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <UmbracoLanding />
            <UmbracoServices />
            <UmbracoServiceDetails />
            <WhyUmbraco />
            <Testimonials />
            <ContactUs />
        </>
    )
}

export default Umbraco;