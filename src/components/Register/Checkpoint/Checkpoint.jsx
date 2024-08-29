import React from 'react';
import './checkpoint.css';

const Checkpoint = ({point}) => {
  return (
    <div className='checkpoint' style={point.style}>
      <div className="checkpoint__wrapper">
        <div className="checkpoint__circle">
        </div>
        <span className="checkpoint__title">{point.name}</span>
        <span className="checkpoint__date">{point.date}</span>

      </div>
    </div>
  )
}

export default Checkpoint