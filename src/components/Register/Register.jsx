import React, { useState, useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import Checkpoint from './Checkpoint/Checkpoint';
import Faq from './Faq/Faq';
import './register.css';
import lingkaran from '../../assets/lingkaran.png';
import bebekdengklek from '../../assets/bebekdengklek.png';
import jejaksetapak from '../../assets/jejaksetapak.png';
import bebekhalo from '../../assets/bebekhalo.png';

const Register = () => {
  const [points, setPoints] = useState([
    {name: "Registration Deadline", date: "TBA", style: {top: `80%`, left: `0%`}},
    {name: "Selection Phase 1", date: "TBA", style: {top: `-15%`, left: `24%`}},
    {name: "Selection Phase 2", date: "TBA", style: {top: `70%`, left: `45%`}},
    {name: "Announcement", date: "TBA", style: {top: `55%`, left: `72%`}},
    {name: "Start of Basic Training", date: "TBA", style: {top: `0%`, left: `91%`}}
  ]);
  const [questions, setQuestions] = useState([
    {question: "What's the material for the selection phases?", answer: "Overall, mathematical logic and programming basics. Please join our Discord server to know the material details."},
    {question: "Can non-compsci students join Jollybee?", answer: "Yes!"},
    {question: "I don't have any programming background. Can I join Jollybee?", answer: "Yes! You can prepare yourself by learning the basics before the selection phase begin. Check out learning page for our learning recommendations and join our Discord server to know more about how to prepare yourself for the selection phases."},
    {question: "Do I get SAT points from Jollybee?", answer: "You can get SAT points from participating competitions."},
    {question: "How much is the registration fee?", answer: "It's 100% free!"},
    {question: "Can I join Jollybee parallel with other student organizations", answer: "Yes, as long as you have a good time management and willing to commit in participating Jollybee's events."}
  ]);
  
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

  return (
    <div className="register component">
      <div className="register__hello section">
        <h1 className="greet register__greet">Hello Candidate!</h1>
        <span>Interested in challenging yourself with fascinating problems? 
        </span>
        <span className="joinUs__container">
          <span>   Join us!   </span>
          <img src={lingkaran} alt="" className="lingkaran" />
        </span>

        <div className="register__buttons">
          <button className="btn btn__register">Register</button>
          <button className="btn btn__discord">Join Discord</button>
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
        <div className="timeline__road">
          <img src={jejaksetapak} alt="" className="jejaksetapak"/>
          {/* {points.map(
            (point) => (
              <Checkpoint point={point} key={point.name}></Checkpoint>
            )
          )} */}
        </div>
        <img src={bebekhalo} alt="" className="bebekhalo"/>
      </div>

      <div className="register__faq section">
        <h1 className="section__title">Frequently Asked Questions</h1>
        <div className="faq__content grid">
          <img src={bebekdengklek} alt="" />
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