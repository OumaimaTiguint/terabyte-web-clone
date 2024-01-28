import React, { useState } from 'react';
import { ContactUs, OffersLanding } from '../components';

const Offers = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <OffersLanding />
            <ContactUs />
        </>
    )
}

export default Offers;