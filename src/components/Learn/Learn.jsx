import React, { useState, useEffect } from 'react';
import Resources from './Resources/Resources';
import jalansetapak from '../../assets/jalansetapak.png';
import jalansetapak2 from '../../assets/jalansetapak2.png';
import jalansetapak3 from '../../assets/jalansetapak3.png';
import jalansetapak4 from '../../assets/jalansetapak4.png';
import cf_logo from '../../assets/cf_logo.png';
import atcoder_logo from '../../assets/atcoder_logo.png';
import tlx_logo from '../../assets/tlx_logo.png';
import kiri_panah from '../../assets/kiri_panah.png';
import kanan_panah from '../../assets/kanan_panah.png';
import './learn.css';
import VanillaTilt from 'vanilla-tilt';

const Learn = () => {
  const [ojs, setOjs] = useState([
    {name: "Codeforces", src: `${cf_logo}`, link: "https://codeforces.com/"},
    {name: "Atcoder", src: `${atcoder_logo}`, link: "https://atcoder.jp/"},
    {name: "TLX", src: `${tlx_logo}`, link: "https://codeforces.com/"}
  ]);
  const [backgroundImage, setBackgroundImage] = useState(jalansetapak);

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
      if (window.innerWidth <= 768) {
        setBackgroundImage(jalansetapak4);
      }
      else if (window.innerWidth <= 896) {
        setBackgroundImage(jalansetapak3);
      }
      else if (window.innerWidth <= 1024) {
        setBackgroundImage(jalansetapak2);
      }
      else {
        setBackgroundImage(jalansetapak);
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
              <span>For newcomers with no coding experience, we recommend learning from the <a href="https://tlx.toki.id/courses/basic-cpp">TLX basic programming courses</a> prepared by TOKI (Tim Olimpiade  Komputer Indonesia).</span>
            </div>
            <div className="for-content tilt">
              <h3>For experienced</h3>
              <span>If you already have experience in CP, we recommend you to try their <a href="https://tlx.toki.id/courses/competitive">basic CP courses</a> for more challenging topics.</span>
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
                <span><b>Participate in live online contests</b>. We suggest trying <a href="https://atcoder.jp/contests/archive?ratedType=1&category=0&keyword=">Atcoder Beginner Contest</a>, <a href="https://codeforces.com/contests?type=div4">Codeforces Div. 4</a>, and <a href="https://codeforces.com/contests?type=div3">Codeforces Div. 3</a> for starters to experience how it feels to be in a real CP competition. We don't recommend doing this before you've finished <a href="https://tlx.toki.id/courses">TLX's introductory courses</a>. Here’s some of our online judges recommendations:</span>
                <div className="oj-recommendations">
                {ojs.map((oj) => (
                  <div className="oj__container">
                    <a href={oj.link}>
                      <img src={oj.src} alt="" />
                    </a>
                    <a href={oj.link}>
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
          <img src={kiri_panah} alt="" />
          <div className="learn__important-text">
            <h3>One last thing</h3>
            <h1 className='greet practice__cp'><i>Practice, practice, practice</i></h1>
            <span>Please watch <a href="https://www.youtube.com/watch?v=xAeiXy8-9Y8">How to start Competitive Programming? For beginners!</a> by Errichto.</span>
            <span>If you keep Errichto's advice in mind and practice diligently, you should be able to improve fast.</span>
          </div>
          <img src={kanan_panah} alt="" />
        </div>
    </div>
  )
}

export default Learn