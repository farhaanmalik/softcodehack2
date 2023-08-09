import React from 'react'
import Themes from '../components/Themes'
import Hero from '../components/Hero'
import About from '../components/About'

const Home = () => {
    return (
        <>
            <div className="container">
                <section id='home'>
                    <Hero />
                </section>
                <section id='about'>
                    <About />
                </section>
                <section id='themes'>
                    <Themes />
                </section>
            </div>
        </>
    )
}

export default Home
