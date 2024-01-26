import React, { useState } from 'react';
import { ContactUs, Testimonials } from '../components';

const Umbraco = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Testimonials />
            <ContactUs />
        </>
    )
}

export default Umbraco;