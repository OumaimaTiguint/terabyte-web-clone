import React, { useState, useEffect } from 'react';
import { ClientsMarquee, InternationalTeam, Loader } from '../components';

const Home = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <ClientsMarquee />
            <InternationalTeam />
        </>
    )
}

export default Home;