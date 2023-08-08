import React, { useState } from 'react'
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <nav className={openMenu ? "active" : ""}>
                <ul>
                    <li>
                        <a href="#home" onClick={() => setOpenMenu(false)} >HOME</a>
                    </li>
                    <li>
                        <a href="#about" onClick={() => setOpenMenu(false)} >ABOUT US</a>
                    </li>
                    <li>
                        <a href="#schedule" onClick={() => setOpenMenu(false)} >SCHEDULE</a>
                    </li>
                    <li>
                        <a href="#tracks" onClick={() => setOpenMenu(false)} >TRACKS</a>
                    </li>
                    <li>
                        <a href="#sponsors" onClick={() => setOpenMenu(false)}>SPONSERS</a>
                    </li>
                    <li>
                        <a href="#team" onClick={() => setOpenMenu(false)} >TEAM</a>
                    </li>
                    <li>
                        <a href="#faq" onClick={() => setOpenMenu(false)} >FAQ</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => setOpenMenu(false)} >CONTACT</a>
                    </li>
                </ul>
            </nav>
            <div className="menu-icon">
                <FaBarsStaggered className={openMenu ? 'nav-icon open-menu active' : 'nav-icon open-menu'} onClick={() => setOpenMenu(true)} />
                <FaXmark className={openMenu ? 'nav-icon close-menu active' : 'nav-icon close-menu'} onClick={() => setOpenMenu(false)} />
            </div>
        </>
    )
}

export default Navbar
