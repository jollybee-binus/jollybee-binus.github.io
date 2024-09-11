import React, { useEffect } from 'react'

const AdjustHeight = () => {
    const adjustHeight = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    useEffect(() => {
        adjustHeight();
    }, []);
    
    return null;
}

export default AdjustHeight