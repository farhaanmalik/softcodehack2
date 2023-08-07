import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <>
            <header>
                <div className='navbar'>
                    <div className="logo">
                        <a href="/"><img src="../logo.png" alt="" /></a>
                    </div>
                    <Navbar />
                </div>
            </header>
        </>
    )
}

export default Header
