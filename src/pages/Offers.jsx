import React, { useState } from 'react';
import { ContactUs, DiscoverOffers, OffersLanding } from '../components';

const Offers = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <OffersLanding />
            <DiscoverOffers />
            <ContactUs />
        </>
    )
}

export default Offers;