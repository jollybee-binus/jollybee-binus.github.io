import React, { useState } from 'react';
import './resources.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { materialList } from '../../data';

const Resources = () => {
    const [materials, setMaterials] = useState(materialList);

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
            pauseOnMouseEnter={true}
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
                    <SwiperSlide className="swiper-material" key={material.name}>
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