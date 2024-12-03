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
        
        <div className="accordion-icon">
          <div
            className={`rect-horizontal ${accordionOpen ?  'open' : ''}`}
          />
          <div
            className={`rect-vertical ${accordionOpen ? 'open' : ''}`}
          />
        </div>
      </button>

      <div className={`answer__container ${accordionOpen ? 'open' : 'close'}`}>
        <span className='accordion__answer'>{faq.answer}</span>
      </div>
    </div>
  )
}

export default Faq