import React, { useState } from 'react';
import './alumni.css';
import { companyListAlumni, universityList } from '../../data';
import lebahresearch from '../../../assets/lebahresearch.png';
import lebahwork from '../../../assets/lebahwork.png';

const Alumni = () => {
    const [companies, setCompanies] = useState(companyListAlumni);
    const [universities, setUniversities] = useState(universityList);

    const renderLink = (array) => {
        return array.map((item, index) => (
            <span key={item.name}>
                <span className="alumni__highlight">
                    {item.name}
                </span>
                {(index < array.length - 1 && array.length > 2) ? ', ' : ''}
                {(index < array.length - 1 && array.length === 2) ? ' ' : ''}
                {(index === array.length - 2) ? 'and ' : ''}
            </span>
        ));
    }

    return (
        <div className="alumni section">
            <h1 className="section__title">Our Alumni</h1>

            <div className="text-container">
                <div className="links-container">
                    Competitive Programming has shaped the mindset of our members, refining them into the best version of themselves. Due to their own efforts, some of the companies of our alumni are 
                    {companies.forEach((item) => (
                        <span>
                            <span className="alumni__highlight">
                                {item.name}
                            </span>, 
                        </span>
                    ))}
                    and others.
                </div>

                <div className="links-container">
                    Some of our alumni also choose to thrive in education and research as a coach, a lecturer, or a researcher in educational institutes such as {renderLink(universities)}.
                </div>
            </div>

            <div className="lebahalumni">
                <img src={lebahwork} alt="" className="lebahwork"/>
                <img src={lebahresearch} alt="" className="lebahresearch"/>
            </div>
        </div>
    )
}

export default Alumni