import React, { useState, useEffect } from 'react';
import { ClientsMarquee, InternationalTeam, Loader, MyRecentWork } from '../components';

const Home = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <ClientsMarquee />
            <InternationalTeam />
            <MyRecentWork />
        </>
    )
}

export default Home;