import React, { useEffect } from 'react';
import './home.css';
import photos_left from '../../assets/photos_left.png';
import photos_right from '../../assets/photos_right.png';
import jollybee_logo from '../../assets/jollybeelogo.png';
import About from './About/About';
import Join from './Join/Join';
import AdjustHeight from '../AdjustHeight';

const Home = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error("The element with id 'about-section' was not found.");
        }
    };

    
    return (
        <div className="home">
            <AdjustHeight></AdjustHeight>
            <div className="banner">
                <div className="header">
                    <h1 className="title">JOLLYBEE</h1>
                    <p className="desc">Competitive Programming Team</p>
                </div>

                <img src={photos_left} alt="" className="photos__left"/>
                <img src={photos_right} alt="" className="photos__right"/>
                <button className="jollybee_logo" onClick={scrollToAbout}>
                <img src={jollybee_logo} alt=""/>
                <div className={"dropdown-icon"}>
                    <span></span>
                    <span></span>
                </div>
                </button>
            </div>

            <div id="about-section">
                <About></About>
            </div>

            <Join></Join>
            
        </div>
    );
}
 
export default Home;