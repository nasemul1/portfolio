import './Navbar.css'

const Navbar = () => {
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
        </>
    );
}
 
export default Navbar;