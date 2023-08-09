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
                        <a href="#themes" onClick={() => setOpenMenu(false)} >Themes</a>
                    </li>
                    <li>
                        <a href="#prizes" onClick={() => setOpenMenu(false)} >Prizes</a>
                    </li>
                    <li>
                        <a href="#team" onClick={() => setOpenMenu(false)} >Team</a>
                    </li>
                    <li>
                        <a href="#timelines" onClick={() => setOpenMenu(false)}>Timelines</a>
                    </li>
                    <li>
                        <a href="#sponsors" onClick={() => setOpenMenu(false)} >Sponsors</a>
                    </li>
                    <li>
                        <a href="#faq" onClick={() => setOpenMenu(false)} >FAQ</a>
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
