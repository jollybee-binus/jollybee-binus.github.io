import React, { useEffect } from 'react'

const AdjustHeight = () => {
    const adjustHeight = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    useEffect(() => {
        adjustHeight();
        window.addEventListener('resize', adjustHeight);

        return () => {
            window.removeEventListener('resize', adjustHeight);
        };
    }, []);
    return null;
}

export default AdjustHeight