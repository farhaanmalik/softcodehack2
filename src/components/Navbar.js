import React, { useState } from 'react'
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <nav className={openMenu ? "active" : ""}>
                <ul>
                    <li>
                        <a href="#home" onClick={() => setOpenMenu(false)} >Home</a>
                    </li>
                    <li>
                        <a href="#about" onClick={() => setOpenMenu(false)} >About Us</a>
                    </li>
                    <li>
                        <a href="#schedule" onClick={() => setOpenMenu(false)} >Schedule</a>
                    </li>
                    <li>
                        <a href="#tracks" onClick={() => setOpenMenu(false)} >Tracks</a>
                    </li>
                    <li>
                        <a href="#sponsors" onClick={() => setOpenMenu(false)}>Sponsers</a>
                    </li>
                    <li>
                        <a href="#team" onClick={() => setOpenMenu(false)} >Team</a>
                    </li>
                    <li>
                        <a href="#faq" onClick={() => setOpenMenu(false)} >Faq</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => setOpenMenu(false)} >Contact</a>
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
