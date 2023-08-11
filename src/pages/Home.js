import React from 'react'
import Themes from '../components/Themes'
import Hero from '../components/Hero'
import About from '../components/About'
import Team from '../components/Team'
import Timeline from '../components/Timeline'
import Sponsors from '../components/Sponsors'
import Partner from '../components/Partner'
import FaqC from '../components/FaqC'

const Home = () => {
    return (
        <>
            <div className="container">
                <Hero />
                <About />
                <Themes />
                <Team />
                <Timeline/>
                <Sponsors />
                <Partner />
                <FaqC />
            </div>
        </>
    )
}

export default Home
