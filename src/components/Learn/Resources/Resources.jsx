import React, { useState } from 'react';
import './resources.css';
import pkd from '../../../assets/pkd.jpg';
import cp4 from '../../../assets/cp4.jpg';
import cp2 from '../../../assets/cp2.jpg';
import usaco from '../../../assets/usaco.png';
import cp_algo from '../../../assets/cp_algo.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

const Resources = () => {
    const [materials, setMaterials] = useState([
        {name: "USACO Guide — by the USA Computing Olympiad", src: `${usaco}`, link: "https://usaco.guide/"},
        {name: "Pemrograman Kompetitif Dasar — book by TOKI", src: `${pkd}`, link: "https://osn.toki.id/data/pemrograman-kompetitif-dasar.pdf"},
        {name: "Competitive Programming 2 — book by Steven Halim and Felix Halim", src: `${cp2}`, link: "https://www.comp.nus.edu.sg/~stevenha/myteaching/competitive_programming/cp2.pdf"},
        {name: "Competitive Programming 4 — book by Steven Halim, Felix Halim, and Suhendry Effendy", src: `${cp4}`, link: "https://www.amazon.com/Competitive-Programming-4-Book-2/dp/B093K67NVN"},
        {name: "CP Algorithms — Jakob Kogler, Oleksandr Kulkov, and Rodion Gorkovenko", src: `${cp_algo}`, link: "https://cp-algorithms.com/index.html"},
    ]);

    return (
        <div className='resources__wrapper'>
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            grabCursor={true}
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            autoplay={{
                delay: 5000,
            }}
            breakpoints={{
                768: {
                    slidesPerView: 2
                },
                900: {
                    slidesPerView: 3
                }
            }}
            >
                {materials.map((material) => (
                    <SwiperSlide className="swiper-material">
                        <a href={material.link}>
                            <div className="material__content">
                                <img src={material.src} alt="" />
                                <div className="material__text">
                                    <span>{material.name}</span>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </div>
    )
}

export default Resources