import { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    function handleClick(){
        setNavOpen(!navOpen);
    }

    return (
        <>
            <nav>
                <div id="logo">
                    <div id="logo-front">N</div>
                </div>
                <div id="nav-links">
                    <a href="#about"><span>01.</span>About</a>
                    <a href="#skill"><span>02.</span>Skills</a>
                    <a href="#work"><span>03.</span>Works</a>
                    <a href="#certification"><span>04.</span>Certificates</a>
                    <a href="#contact"><span>05.</span>Contacts</a>
                    <div id="nav-btn"><div id='btn'>Download CV</div></div>
                </div>
            </nav>
            <div id="mobile-nav">
                <div id="navbar">
                    <div id="logo">
                        <div id="logo-front">N</div>
                    </div>
                </div>
                <div id="menu-toggle" onClick={() => handleClick()}>
                    <div className={navOpen ? 'hambox hamboxopen':'hambox'}>
                        <span className={navOpen?'line-top spin':'line-top'}></span>
                        <span className={navOpen?'line-bottom spin':'line-bottom'}></span>
                    </div>
                </div>
                <div className={navOpen ? "nav-overlay open" : "nav-overlay"}>
                    <a href="#about"><span>01.</span>About</a>
                    <a href="#skill"><span>02.</span>Skills</a>
                    <a href="#work"><span>03.</span>Works</a>
                    <a href="#certification"><span>04.</span>Certificates</a>
                    <a href="#contact"><span>05.</span>Contacts</a>
                    <div id="mbl-nav-btn"><div id='mbl-btn'>Download CV</div></div>
                </div>
            </div>
        </>
    );
}
 
export default Navbar;