import React, { useState, useEffect } from 'react';
import { ClientsMarquee, ExploreOurServices, InternationalTeam, Loader, MyRecentWork } from '../components';

const Home = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <ClientsMarquee />
            <InternationalTeam />
            <ExploreOurServices />
            <MyRecentWork />
        </>
    )
}

export default Home;