import React, { useState } from 'react';
import { ContactUs } from '../components';

const Home = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <ContactUs />
        </>
    )
}

export default Home;