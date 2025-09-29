import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';
import Faq from './Faq/Faq';
import Timeline from './Timeline/Timeline';
import './register.css';
import { pointList, questionList } from '../data';

const Register = () => {
  const [timelineImg, setTimelineImg] = useState(process.env.PUBLIC_URL + "/assets/jejaklebah.svg");
  const [faqImg, setFaqImg] = useState(process.env.PUBLIC_URL + "/assets/lebahfaq.png");
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
        setTimelineImg(process.env.PUBLIC_URL + "/assets/jejaklebahvertikal2.svg");
      }
      else if (window.innerWidth <= 1024) {
        setTimelineImg(process.env.PUBLIC_URL + "/assets/jejaklebahvertikal.svg");
      }
      else {
        setTimelineImg(process.env.PUBLIC_URL + "/assets/jejaklebah.svg");
      }

      if(window.innerWidth <= 768) {
        setFaqImg(process.env.PUBLIC_URL + "/assets/lebahfaqrev.png");
      }
      else {
        setFaqImg(process.env.PUBLIC_URL + "/assets/lebahfaq.png");
      }
    };

    updateImage();
    window.addEventListener('resize', updateImage);

    return () => {
      window.removeEventListener('resize', updateImage);
    }
  }, []);

  const handleRedirectRegister = () => {
    window.open('https://forms.gle/GTeUkYRxSrKu1Rwm8', '_blank');
  };

  const handleRedirectJoin = () => {
    window.open('https://discord.gg/fSaFuT3PaA', '_blank');
  };

  return (
    <div className="register component">
      <img src={process.env.PUBLIC_URL + "/assets/hexagon1.png"} alt="" className="hexagon1"/>
      <img src={process.env.PUBLIC_URL + "/assets/hexagon2.png"} alt="" className="hexagon2"/>
      <img src={process.env.PUBLIC_URL + "/assets/hexagon3.png"} alt="" className="hexagon3"/>
      <div className="register__hello section" id="notice__section">
        <h1 className="greet register__greet">Hello Candidate!</h1>
        <span>Interested in challenging yourself with fascinating problems? 
        </span>
        <span className="joinUs__container">
          <span>   Join us!   </span>
          <img src={process.env.PUBLIC_URL + "/assets/lingkaran.png"} alt="" className="lingkaran" />
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
                    <img src={process.env.PUBLIC_URL + "/assets/poinlebah.png"} alt=""/>
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