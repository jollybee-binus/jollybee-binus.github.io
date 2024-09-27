import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';
import Faq from './Faq/Faq';
import Timeline from './Timeline/Timeline';
import './register.css';
import hexagon1 from '../../assets/hexagon1.png';
import hexagon2 from '../../assets/hexagon2.png';
import hexagon3 from '../../assets/hexagon3.png';
import lingkaran from '../../assets/lingkaran.png';
import jejaklebah from '../../assets/jejaklebah.png';
import poinlebah from '../../assets/poinlebah.png';
import jejaklebahvertikal from '../../assets/jejaklebahvertikal.png';
import jejaklebahvertikal2 from '../../assets/jejaklebahvertikal2.png';
import lebahfaq from '../../assets/lebahfaq.png';
import lebahfaqrev from '../../assets/lebahfaqrev.png';
import { pointList, questionList } from '../data';

const Register = () => {
  const [timelineImg, setTimelineImg] = useState(jejaklebah);
  const [faqImg, setFaqImg] = useState(lebahfaq);
  const [points, setPoints] = useState(pointList);
  const [questions, setQuestions] = useState(questionList);

  
  
  useEffect(() => {
    const tiltElements = document.querySelectorAll('.info__card');
    
    tiltElements.forEach((element) => {
      VanillaTilt.init(element, {
        max: 3,
        speed: 500,
        glare: true,
        "max-glare": 0.5,
      });
    });

    return () => {
      tiltElements.forEach((element) => {
        if (element.vanillaTilt) {
          element.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth <= 576) {
        setTimelineImg(jejaklebahvertikal2);
      }
      else if (window.innerWidth <= 1024) {
        setTimelineImg(jejaklebahvertikal);
      }
      else {
        setTimelineImg(jejaklebah);
      }

      if(window.innerWidth <= 768) {
        setFaqImg(lebahfaqrev);
      }
      else {
        setFaqImg(lebahfaq);
      }
    };

    updateImage();
    window.addEventListener('resize', updateImage);

    return () => {
      window.removeEventListener('resize', updateImage);
    }
  }, []);

  const handleRedirectRegister = () => {
    window.open('https://forms.office.com/r/bv10Y5h1hX', '_blank');
  };

  const handleRedirectJoin = () => {
    window.open('https://discord.gg/fSaFuT3PaA', '_blank');
  };

  return (
    <div className="register component">
      <img src={hexagon1} alt="" className="hexagon1"/>
      <img src={hexagon2} alt="" className="hexagon2"/>
      <img src={hexagon3} alt="" className="hexagon3"/>
      <div className="register__hello section" id="notice__section">
        <h1 className="greet register__greet">Hello Candidate!</h1>
        <span>Interested in challenging yourself with fascinating problems? 
        </span>
        <span className="joinUs__container">
          <span>   Join us!   </span>
          <img src={lingkaran} alt="" className="lingkaran" />
        </span>

        <div className="register__buttons">
          <button className="btn btn__register" onClick={handleRedirectRegister}>Register</button>
          <button className="btn btn__discord" onClick={handleRedirectJoin}>Join Discord</button>
        </div>

        <div className="register__cards"> 
          <div className="info__card tilt">
            <h2>Notice</h2>
            <p>Please join our Discord server after registration. All announcements will be shared on the server.</p>
            <ul>
              <li>Don't hesitate to register if you don't have any coding experience! Use your time to learn to code before the first phase.</li>
              <li>The registration is 100% free!</li>
              <li>Non-registrants are welcomed too in our Discord server. Go ahead and join in to learn more about us.</li>
            </ul>
          </div>

          <div className="info__card">
            <h2>Early Bird</h2>
            <p>If you have any high school CP experience (IOI contestant, OSN medalist, winner of BNPCHS, NPC, JCPC, etc.) or achievements with other OI or OSN fields, please reach out to us as soon as possible via our social media channels, so that we can prepare you for the nearest competition.</p>
          </div>
        </div>
      </div>

      <div className="register__timeline section">
        <h1 className='section__title'>Timeline</h1>
        <div className="timeline__details">
          <div className="timeline__img-wrapper">
            <img src={timelineImg} alt="" className="jejaklebah"/>

            <div className="timeline__content">
              {points.map(
                (point) => (
                  <div className="poinlebah__wrapper">
                    <img src={poinlebah} alt=""/>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="timeline__content">
            {points.map(
              (point) => (
                <Timeline point={point} key={point.name}></Timeline>
              )
            )}
          </div>
        </div>
      </div>

      <div className="register__faq section">
        <h1 className="section__title">Frequently Asked Questions</h1>
        <div className="faq__content grid">
          <img src={faqImg} alt=""/>
          <div className="faq__list">
            {questions.map(
              (question) => (
                <Faq faq={question} key={question.question}></Faq>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register