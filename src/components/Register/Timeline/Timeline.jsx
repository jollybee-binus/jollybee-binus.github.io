import React from 'react';
import './timeline.css';
import poinlebah from '../../../assets/poinlebah.png';

const Timeline = ({point}) => {
  return (
    <div className="timeline">
        <h3 className="timeline__name">{point.name}</h3>
        <h3 className="timeline__date">{point.date}</h3>
        <div className="timeline__desc">
          <span>{point.desc}</span>
        </div>
    </div>
  )
}

export default Timeline