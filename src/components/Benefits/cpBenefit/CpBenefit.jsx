import React from 'react';
import './CpBenefit.css';

const CpBenefit = ({cpBenefit}) => {
  return (
    <div className="cpBenefit__wrapper">
      <i className={cpBenefit.icon}></i>
      <span className="cpBenefit__name">{cpBenefit.name}</span>
    </div>
  )
}

export default CpBenefit