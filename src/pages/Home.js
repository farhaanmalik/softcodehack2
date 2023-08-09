import React from 'react'
import Themes from '../components/Themes'
import Hero from '../components/Hero'
import About from '../components/About'
import Team from '../components/Team'
import Sponsors from '../components/Sponsors'
import Partner from '../components/Partner'

const Home = () => {
    return (
        <>
            <div className="container">
                <Hero />
                <About />
                <Themes />
                <Team />
                <Sponsors />
                <Partner />
            </div>
        </>
    )
}

export default Home
