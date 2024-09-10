import React, { useState, useEffect } from 'react';
import lebahcp from '../../assets/lebahcp.png';
import lebahcp2 from '../../assets/lebahcp2.png';
import lebahcp3 from '../../assets/lebahcp3.png';
import CpBenefit from './cpBenefit/CpBenefit';
import icpcwf from '../../assets/icpcwf.jpg';
import JbBenefit from './jbBenefit/JbBenefit';
import Slider from './Slider/Slider';
import './benefits.css';
import AdjustHeight from '../AdjustHeight';

const Benefits = () => {
  const [cp, setCp] = useState([
    {icon: `<i class="fa-solid fa-face-smile"></i>`, name: "It's fun!"},
    {icon: `<i class="fa-solid fa-brain"></i>`, name: "Learn to think efficiently and effectively"},
    {icon: `<i class="fa-solid fa-puzzle-piece"></i>`, name: "Improve your problem-solving skills"},
    {icon: `<i class="fa-solid fa-code"></i>`, name: "Improve your general coding skills"},
    {icon: `<i class="fa-solid fa-circle-nodes"></i>`, name: "Be proficient at algorithms and data structure."},
    {icon: `<i class="fa-solid fa-user-group"></i>`, name: "Learn to code and solve problems as a team"},
    {icon: `<i class="fa-solid fa-briefcase"></i>`, name: "Get industry recognition"},
    {icon: `<i class="fa-solid fa-file"></i>`, name: "Win achievements for your CV"}
  ]);
  const [jb, setJb] = useState([
    {name: "Fun community", explain: "To have a fun community with shared interest in competitive programming. We learn and grow together. Having community means a lot to your learning journey!"},
    {name: "Exciting experience", explain: "Experience what it’s like to hold CP related events, like becoming a problemsetter for BNPCHS (national CP competition for highs school students)."},
    {name: "Exclusive apprel", explain: "Get your very own exclusive Jollybee jacket."},
    {name: "Contest & materials", explain: "Take part in practice contests and material sessions."},
    {name: "Indonesian CP community", explain: "Involve yourself in Indonesian CP community. For example, by coaching for training camps."},
    {name: "Company visit", explain: "Get the opportunity to visit tech company. In 2022, we visited Ajaib."},
    {name: "Competition information", explain: "Get frequent updates information about available competitions and join it for free (all competition-related expenses are paid by Binus University)."},
    {name: "Routine outings", explain: "Go to various places with other Jollybee member to strengthen our bonding. We love to play badminton, have a tea time session, etc."},
    {name: "Vast connection", explain: "Some of the companies of Jollybee alumni are Shopee, Google, Samsung R&D Institute Indonesia, Traveloka, Tokopedia, Sirclo, etc. Some of Jollybee alumni thrive in education and research field at National University of Singapore, University of Tsukuba, and Binus University."},
  ]);
  const [bannerImg, setBannerImg] = useState(lebahcp);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth <= 576) {
        setBannerImg(lebahcp3);
      }
      else if (window.innerWidth <= 1024) {
        setBannerImg(lebahcp2);
      }
      else {
        setBannerImg(lebahcp);
      }
    };

    updateImage();
    window.addEventListener('resize', updateImage);

    return () => {
      window.removeEventListener('resize', updateImage);
    }
  }, []);


  return (
    <div className='benefit'>
      <AdjustHeight></AdjustHeight>
      <div className="benefit__banner">
        <h1 className='banner__title'>Entering the World of Competitive Programming?</h1>
        <img src={bannerImg} alt="" className="lebahcp"/>
        <img src={icpcwf} alt="" className="icpcwf"/>
      </div>

      <div className="why__cp section">
        <h2 className="section__title">Why learn competitive programming?</h2>
        <div className="cp__benefits grid">
          {cp.map(
            (cpBenefit) => (
              <CpBenefit cpBenefit={cpBenefit} key={cpBenefit.name}></CpBenefit>
            )
          )}
        </div>
      </div>

      <div className="why__jb section">
        <h2 className="section__title">Why join Jollybee?</h2>
        <div className="jb__benefits grid">
          {jb.map(
            (jbBenefit) => (
              <JbBenefit jbBenefit={jbBenefit} key={jbBenefit.name}></JbBenefit>
            )
          )}
        </div>
      </div>

      <div className="testimonials section">
        <h2 className="section__title">Testimonials</h2>
        <Slider></Slider>
      </div>
    </div>
  )
}

export default Benefits