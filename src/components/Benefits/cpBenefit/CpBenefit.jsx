import React from 'react';
import './CpBenefit.css';

const CpBenefit = ({cpBenefit}) => {
  return (
    <div className="cpBenefit__wrapper">
      <div dangerouslySetInnerHTML={{ __html: cpBenefit.icon }} className="cpBenefit__icon"></div>
      <span className="cpBenefit__name">{cpBenefit.name}</span>
    </div>
  )
}

export default CpBenefit