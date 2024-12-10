import React, { useState, useEffect } from 'react';
import Resources from './Resources/Resources';
import './learn.css';
import VanillaTilt from 'vanilla-tilt';
import { ojList } from '../data';

const Learn = () => {
  const [ojs, setOjs] = useState(ojList);
  const [backgroundImage, setBackgroundImage] = useState(process.env.PUBLIC_URL + "/assets/jalansetapak.png");

  useEffect(() => {
    const tiltElements = document.querySelectorAll(['.learn__oj-main', '.learn__oj-notes']);
    
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
      if (window.innerWidth <= 480) {
        setBackgroundImage(process.env.PUBLIC_URL + "/assets/jalansetapak3.png");
      }
      else if (window.innerWidth <= 896) {
        setBackgroundImage(process.env.PUBLIC_URL + "/assets/jalansetapak2.png");
      }
      else {
        setBackgroundImage(process.env.PUBLIC_URL + "/assets/jalansetapak.png");
      }
    };

    updateImage();
    window.addEventListener('resize', updateImage);

    return () => {
      window.removeEventListener('resize', updateImage);
    };
  }, []);
  
  return (
    <div className="learn component">
      <img src={backgroundImage} alt="" className="jalansetapak"/>

        <div className="learn__start section">
          <h1 className="greet">Your starting point!</h1>
          <h3>There are various ways to learn competitive programming. Just make sure to enjoy the adventure of learning!</h3>

          <div className="learn__start-for">
            <div className="for-content tilt">
              <h3>For beginner</h3>
              <span>For newcomers with no coding experience, we recommend learning from the <a href="https://tlx.toki.id/courses/basic-cpp" target="_blank">TLX basic programming courses</a> prepared by TOKI (Tim Olimpiade  Komputer Indonesia).</span>
            </div>
            <div className="for-content tilt">
              <h3>For experienced</h3>
              <span>If you already have experience in CP, we recommend you to try their <a href="https://tlx.toki.id/courses/competitive-1" target="_blank">basic CP courses</a> for more challenging topics.</span>
            </div>
          </div> 
        </div>

        <div className="learn__otherSources section">
          <div className="otherSources-text">
            <h1 className="section__title">Other learning resources</h1>
            <span>You can find a bunch of useful materials in here.</span>
          </div>
          <Resources></Resources>
        </div>

        <div className="section">
          <div className="learn__oj">
            <div className="learn__oj-main tilt">
              <h1 className='section__title'>Spice it up with online judges</h1>

              <div className="learn__oj-main-text">
                <span><b>Participate in live online contests</b>. We suggest trying <a href="https://atcoder.jp/contests/archive?ratedType=1&category=0&keyword=" target="_blank">Atcoder Beginner Contest</a>, <a href="https://codeforces.com/contests?type=div4" target="_blank"> Codeforces Div. 4</a>, and <a href="https://codeforces.com/contests?type=div3" target="_blank">Codeforces Div. 3</a> for starters to experience how it feels to be in a real CP competition. We don't recommend doing this before you've finished <a href="https://tlx.toki.id/courses" target="_blank">TLX's introductory courses</a>. Here’s some of our online judges recommendations:</span>
                <div className="oj-recommendations">
                {ojs.map((oj) => (
                  <div className="oj__container" key={oj.name}>
                    <a href={oj.link} target="_blank">
                      <img src={oj.src} alt="" />
                    </a>
                    <a href={oj.link} target="_blank">
                      <span>{oj.name}</span>
                    </a>
                  </div>
                ))}
              </div>
              </div>
            </div>

            <div className="learn__oj-notes tilt">
              <h2>Some things to remember...</h2>
              <span>If you can't solve any problems in a contest, <b>don't be discouraged</b>. Try our recommended courses above and practice some more.</span>
              <span>Everyone started out as a <b>newbie</b>; it's just that you've only just taken your first step in CP. Don't worry, our selection phases are designed for starters in basic programming.</span>
            </div>
          </div>
        </div>

        <div className="learn__important section">
          <img src={process.env.PUBLIC_URL + "/assets/kiri_panah.png"} alt="" />
          <div className="learn__important-text">
            <h3>One last thing</h3>
            <h1 className='greet practice__cp'><i>Practice, practice, practice</i></h1>
            <span>Please watch <a href="https://www.youtube.com/watch?v=xAeiXy8-9Y8" target="_blank">How to start Competitive Programming? For beginners!</a> by Errichto.</span> 
            <span>If you keep Errichto's advice in mind and practice diligently, you should be able to improve fast.</span>
          </div>
          <img src={process.env.PUBLIC_URL + "/assets/kanan_panah.png"} alt="" />
        </div>
    </div>
  )
}

export default Learn