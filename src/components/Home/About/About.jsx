import React from 'react';
import { useState } from 'react';
import './about.css';
import { companyListAbout, socialList } from '../../data'; 

const About = () => {
    const [companies, setCompanies] = useState(companyListAbout);
    const [socials, setSocials] = useState(socialList);

    return (
        <div className="about section">
            <div className="cp__section">
                <h1 className="section__title about__title">
                    What is <span className="cp__highlight">Competitive Programming?</span>
                </h1>
                <div className="text-container">
                    <span>
                    Competitive Programming, or CP in short, is a mind sport in which contestants are given a set of programming problems to be solved within a preset amount of time.
                    </span>
                    <div className="links-container">
                        Competitions are supported by various companies such as 
                        {companies.map((company) => (
                            <span key={company.name}>
                                <a href={company.link} target="_blank">{company.name}</a>, 
                            </span>
                        ))}
                        and others.
                    </div>
                </div>
            </div>

            <div className="jb__section">
                    <h1 className="section__title about__title">
                        What is <span className='jb__highlight'>Jollybee?</span>
                    </h1>
                    <div className="text-container">
                        <span>
                            Jollybee is Bina Nusantara University's official CP team. Currently, Jollybee has 30+ active members being coached directly by the former chief judge of the Indonesian National Science Olympiad in Informatics (OSN bidang Komputer) 2020 and former judge of the International Olympiad in Informatics (IOI) 2022.
                        </span>
                        <span>
                            Jollybee has won numerous national and international competitions and has represented Indonesia in the ICPC World Finals several times.
                            
                            <div className="links-container">
                                Please visit our 
                                    {socials.map((social, index) => (
                                    <span key={social.name}>
                                        <a href={social.link}>
                                            {social.name}
                                        </a>
                                        {(index < socials.length - 1 && socials.length > 2) ? ', ' : ''}
                                        {(index < socials.length - 1 && socials.length === 2) ? ' ' : ''}
                                        {(index === socials.length - 2) ? 'and ' : ''}
                                    </span>
                                ))}
                                 for further information.
                            </div>
                        </span>
                    </div>
            </div>
        </div>
    )
}

export default About