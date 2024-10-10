import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { Link } from 'react-router-dom';
import './join.css';

const Join = () => {
    useEffect(() => {
        const tiltElements = document.querySelectorAll('.join__box');
        
        tiltElements.forEach((element) => {
            VanillaTilt.init(element, {
            max: 3,
            speed: 500,
            glare: true,
            "max-glare": 0.5,
            });
        });

        return () => {
            tiltElements.forEach((element) => {
            if (element.vanillaTilt) {
                element.vanillaTilt.destroy();
            }
            });
        };
    }, []);

    return (
        <div className='join section'>
            <img src={process.env.PUBLIC_URL + "/assets/riak_left.png"} alt="" />
            <div className="join__box tilt">
                <h1>Interested in joining us?</h1>
                <p>Go to <b><Link to="/register">Register page</Link></b> to find out more!</p>
                <p>Psstt... It's 100% free</p>
            </div>
            <img src={process.env.PUBLIC_URL + "/assets/riak_right.png"} alt="" />
        </div>
    )
}

export default Join