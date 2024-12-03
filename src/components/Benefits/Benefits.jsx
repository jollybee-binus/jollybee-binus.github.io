import React, { useState, useEffect } from 'react';
import './benefits.css';
import CpBenefit from './cpBenefit/CpBenefit';
import JbBenefit from './jbBenefit/JbBenefit';
import Slider from './Slider/Slider';
import AdjustHeight from '../AdjustHeight';
import { jbBenefitList, cpBenefitList } from '../data';

const Benefits = () => {
  const [cp, setCp] = useState(cpBenefitList);
  const [jb, setJb] = useState(jbBenefitList);
  const [bannerImg, setBannerImg] = useState(process.env.PUBLIC_URL + "/assets/lebahcp.png");

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth <= 576) {
        setBannerImg(process.env.PUBLIC_URL + "/assets/lebahcp3.png");
      }
      else if (window.innerWidth <= 1024) {
        setBannerImg(process.env.PUBLIC_URL + "/assets/lebahcp2.png");
      }
      else {
        setBannerImg(process.env.PUBLIC_URL + "/assets/lebahcp.png");
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
        <img src={process.env.PUBLIC_URL + "/assets/icpcwf.jpg"} alt="" className="icpcwf"/>
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