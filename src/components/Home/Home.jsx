import React, { useEffect } from 'react';
import './home.css';
import About from './About/About';
import Join from './Join/Join';
import Alumni from './Alumni/Alumni';
import Sponsors from './Sponsors/Sponsors';
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

                <img src={process.env.PUBLIC_URL + "/assets/photos_left.png"} alt="" className="photos__left"/>
                <img src={process.env.PUBLIC_URL + "/assets/photos_right.png"} alt="" className="photos__right"/>
                <button className="jollybee_logo" onClick={scrollToAbout}>
                <img src={process.env.PUBLIC_URL + "/assets/jollybeelogo.png"} alt=""/>
                <div className={"dropdown-icon"}>
                    <span></span>
                    <span></span>
                </div>
                </button>
            </div>

            <div id="about-section">
                <About></About>
            </div>

            <Alumni></Alumni>

            <Sponsors></Sponsors>

            <Join></Join>
            
        </div>
    );
}
 
export default Home;