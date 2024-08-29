import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import JollybeeLogo from '../../assets/jollybeelogo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if(offset > 50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    let navbar = 'navbar';
    if(scrolled){
        navbar += ' navbar__scrolled';
    }

    return (
        <div className={navbar}>
            {/* logo */}
            <img src={JollybeeLogo} alt="JB Logo" className='logo'/>

            {/* menu list */}
            <div className="links">
                <Link to="/" className="link">Home</Link>
                <Link to="/learn" className="link">Learn</Link>
                <Link to="/benefits" className="link">Benefits</Link>
                <Link to="/register" className="link">Register</Link>
            </div>
        </div>
  )
}

export default Navbar