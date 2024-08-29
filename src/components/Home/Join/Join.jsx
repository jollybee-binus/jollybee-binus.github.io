import React from 'react';
import { Link } from 'react-router-dom';
import './join.css';
import riak_left from '../../../assets/riak_left.png';
import riak_right from '../../../assets/riak_right.png';

const Join = () => {
    return (
        <div className='join section'>
            <img src={riak_left} alt="" />
            <div className="join__box">
                <h1>Interested in joining us?</h1>
                <p>Go to <Link to="/register">Register page</Link> to find out more!</p>
                <p>Psstt... It's 100% free</p>
            </div>
            <img src={riak_right} alt="" />
        </div>
    )
}

export default Join