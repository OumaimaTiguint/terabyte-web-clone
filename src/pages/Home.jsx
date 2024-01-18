import React, { useState, useEffect } from 'react';
import { ClientsMarquee, Loader } from '../components';

const Home = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <ClientsMarquee />
        </>
    )
}

export default Home;