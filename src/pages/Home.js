import React from 'react'
import Themes from '../components/Themes'
import Hero from '../components/Hero'
import About from '../components/About'
import Team from '../components/Team'
import Timeline from '../components/Timeline'
import Sponsors from '../components/Sponsors'
import Partner from '../components/Partner'
import FaqC from '../components/FaqC'
import Prize from '../components/Prize'

const Home = () => {
    return (
        <>
            <div className="container">
                <Hero />
                <About />
                <Themes />
                <Prize />
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
