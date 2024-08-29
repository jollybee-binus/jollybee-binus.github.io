import React, {useState} from 'react';
import './faq.css';

const Faq = ({faq}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const handleClick = (() => {
    setAccordionOpen(!accordionOpen);
  });

  return (
    <div className='accordion'>
      <button onClick={handleClick} className="accordion__btn">
        <span className='accordion__question'>{faq.question}</span>
        
        <svg className="accordion-icon"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`rect-horizontal ${accordionOpen ?  'open' : ''}`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`rect-vertical ${accordionOpen ? 'open' : ''}`}
          />
        </svg>
      </button>

      <div className={`answer__container ${accordionOpen ? 'open' : 'close'}`}>
        <span className='accordion__answer'>{faq.answer}</span>
      </div>
    </div>
  )
}

export default Faq