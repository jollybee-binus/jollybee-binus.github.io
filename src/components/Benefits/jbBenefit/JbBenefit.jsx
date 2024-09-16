import React, {useState} from 'react';
import './jbBenefit.css';

const JbBenefit = ({jbBenefit}) => {
    const [dropdown, setDropdown] = useState(false);
    const handleMouseEnter = (() => {
        setDropdown(true);
    });
    const handleMouseLeave = (() => {
        setDropdown(false);
    });
    const handleClick = (() => {
        setDropdown(!dropdown);
    })

    return (
        <div className="jbBenefit__wrapper">
            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} className={`dropdown__btn ${dropdown ? 'open' : 'close'}`}>
                <div className="title__container">
                    <h3 className='jbBenefit__name'>{jbBenefit.name}</h3>
                    <div className={`dropdown-icon ${dropdown ? 'open' : 'close'}`}>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className={`explain__container ${dropdown ? 'open' : 'close'}`}>
                    <span className='jbBenefit__explain'>{jbBenefit.explain}</span>
                </div>
            </button>
        </div>
    )
}

export default JbBenefit