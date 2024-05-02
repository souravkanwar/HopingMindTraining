import React from 'react'
import Poster from './Poster';
import About from './About';
import Team from './Team';
import Work from './Work';
import Pricing from './Pricing';
import Contact from './Contact';
import User_useEffect from './User_useEffect';

function Home() {
    return (
        <div>
            
            <Poster />
            <About />
            <Team />
            <Work />
            <Pricing />
            <Contact />
            
            <User_useEffect/>
        </div>
    )
}

export default Home
