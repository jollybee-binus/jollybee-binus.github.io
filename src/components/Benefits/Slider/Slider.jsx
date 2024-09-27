import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css';
import { testimonialList } from '../../data';

const Slider = () => {
    const [testimonials, setTestimonials] = useState(testimonialList); 
    const swiperContainerRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperContainerRef.current;
        if (!swiperContainer) return;

        const slides = swiperContainer.querySelectorAll('.swiperslide');

        let maxHeight = 0;
        slides.forEach(slide => {
            const height = slide.offsetHeight;
            if (height > maxHeight) {
                maxHeight = height;
            }
        });

        slides.forEach(slide => {
            slide.style.height = `${maxHeight}px`;
        });
    }, []);

    return (
        <div className="slider">

            <Swiper
            ref={swiperContainerRef}
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            watchOverflow={true}
            slidesPerView={1}
            spaceBetween={0}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1.5,
            }}
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
                    slidesPerView: "auto"
                }
            }}>
                <div className="swiper__container">
                     
                    {testimonials.map((testimonial) => (
                        <SwiperSlide className="swiperslide" key={testimonial.name}>
                            <div className="swiper__header">
                                <img src={testimonial.src} alt="" />
                                <div className="swiper__identity">
                                    <h2>{testimonial.name}</h2>
                                    <h3>{testimonial.year}</h3>
                                </div>
                            </div>
                            <p dangerouslySetInnerHTML={{ __html: testimonial.desc }} />
                        </SwiperSlide>
                    ))}

                </div>

        </Swiper>
    
    </div>
    )
}

export default Slider