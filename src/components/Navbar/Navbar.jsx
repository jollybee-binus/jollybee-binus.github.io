import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import JollybeeLogo from '../../assets/jollybeelogo.png';
import ScrollTop from '../ScrollTop.jsx';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [burgerOpen, setBurgerOpen] = useState(false);

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

    const burgerClick = () => {
        setBurgerOpen(!burgerOpen);
    }



    return (
        <div className={navbar}>
            <ScrollTop></ScrollTop>
            {/* logo */}
            <Link to="/">
                <img src={JollybeeLogo} alt="JB Logo" className='logo'></img>
            </Link>

            {/* menu list */}
            <div className="burger__wrapper" onClick={burgerClick}>
                <div className={`burger__bar ${burgerOpen ? 'open' : ''}`}></div>
                <div className={`burger__bar ${burgerOpen ? 'open' : ''}`}></div>
                <div className={`burger__bar ${burgerOpen ? 'open' : ''}`}></div>
            </div>
            <div className={`links ${burgerOpen ? 'open' : ''}`} onClick={burgerClick}>
                <Link to="/" className={`link ${burgerOpen ? 'open' : ''}`}>Home</Link>
                <Link to="/learn" className={`link ${burgerOpen ? 'open' : ''}`}>Learn</Link>
                <Link to="/benefits" className={`link ${burgerOpen ? 'open' : ''}`}>Benefits</Link>
                <Link to="/register" className={`link ${burgerOpen ? 'open' : ''}`}>Register</Link>
            </div>

            <div className={`background__wrapper ${burgerOpen ? 'open' : ''}`} onClick={burgerClick}>
            </div>
        </div>
  )
}

export default Navbar