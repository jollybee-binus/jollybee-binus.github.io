import React, { useState } from 'react';
import './sponsors.css';

const Sponsors = () => {
    const [sponsors, setSponsors] = useState([
        {name: "Huawei", img: process.env.PUBLIC_URL + "/assets/huawei_logo.png"}
    ])
  return (
    <div className="sponsors section">
        <h1 className="section__title">Sponsored by</h1>
        <div className="sponsors-list">
            {sponsors.map((sponsor) => (
                <div className="sponsor__wrapper" key={sponsor.name}>
                    <img src={sponsor.img} alt="" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Sponsors