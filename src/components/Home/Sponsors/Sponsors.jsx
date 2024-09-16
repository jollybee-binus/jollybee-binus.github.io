import React, { useState } from 'react';
import huawei_logo from '../../../assets/huawei_logo.png';
import './sponsors.css';

const Sponsors = () => {
    const [sponsors, setSponsors] = useState([
        {name: "Huawei", img: `${huawei_logo}`}
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