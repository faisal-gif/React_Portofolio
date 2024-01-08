import React, { useState } from 'react'
import f from '../F.png'
import menu from '../menu.png';
import { Link } from "react-scroll";
import '../css/navbar.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={f} alt="logo" className='logo' />
            <div className="menu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="menuListItem">Home</Link>
                <Link activeClass='active' to='aboutMe' spy={true} smooth={true} offset={-100} duration={500} className="menuListItem">About</Link>
                <Link activeClass='active' to='portofolio' spy={true} smooth={true} offset={-100} duration={500} className="menuListItem">Portofolio</Link>
            </div>
            <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}>
                <button className="contactButton">Contact Me</ button>
            </Link>

            <img src={menu} alt=" Menu" className='mobMenu'  onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='aboutMe' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='portofolio' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portofolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact Me</Link>
            </div>

        </nav>
    )
}

export default Navbar