import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bebekdengklek from '../../../assets/bebekdengklek.png';
import './slider.css';

const Slider = () => {
    const [testimonials, setTestimonials] = useState([
        {name: "Owmicron", year: "B23", src: `${bebekdengklek}`, desc: "Overall JB (Jollybee) experience: <br> - Improved my cp skills exponentially. Would never reach this point without JB <br> - I met some amazing and awesome people through JB <br> - Arcade and culinary sessions are my favorites <br> - JB actually changed my life path, I could have live the normal internship life, but competitive enrichment track allows me to train for a full year <br> - I would never have the chance to compete in ICPC world finals, thanks JB."},
        {name: "SunShine", year: "B24", src: `${bebekdengklek}`, desc: "Sejak join Jollybee, aku jadi tahu soal apa itu Competitive Programming (CP) dan orang-orang CP di Indonesia (dan Jollybee). <br><br> Ada yang jago, ada yang jago banget, ada yang si paling sepuh. Mereka semua super friendly dan suportif terhadap satu sama lain. <br><br> Gak cuma skill CP aja yang aku dapetin dari ikut Jollybee, tapi juga banyak soft skill dari kegiatan Jollybee lainnya yang bisa aku peroleh."},
        {name: "vioalbert", year: "B24", src: `${bebekdengklek}`, desc: "Bagi kalian yang suka problem solving dan programming, Jollybee adalah komunitas yang pas buat kalian. <br><br> Selain bisa pergi ke lomba2 dan juara, kalian juga bisa bersosialisasi dan have fun dengan sesama anggota yang punya interest yang sama. Terkadang member-member Jollybee suka ngajak jalan-jalan, main arcade, dan makan-makan bareng. <br><br> Jadi kalian ga cuma bisa berprestasi, tapi juga have fun sepanjang perjalanan Competitive Programming kalian!"},
        {name: "Feli", year: "B23", src: `${bebekdengklek}`, desc: "Jollybee komunitasnya seru. Kamu bebas nge-cp (Competitive Programming) sesuka kamu. Kamu suka ngerjain soal? Kamu suka ngebuat soal? Kamu suka ngajar? Ayo sini. <br><br> Di Jollybee kamu bener\" bisa fokus dengan apa pun yang kamu mau kerjain. Buat lomba, kamu tinggal daftar dan lomba aja karena lomba udh dicariin, perjalanan ke venue lomba udah diurusin semua, biaya direimburse semua, dan kalo menang ada bonus tambahan dari Binus. Dan ini semua adalah default priviledgemu sebagai anggota tanpa harus bayar sepeser pun. <br><br> Terlebih, kamu juga sangat bebas berekspresi di sini. Nggak ada yang namanya hirarki, Jollybee itu benar-benar komunitas yang positif dan saling support."},
        {name: "Blankts", year: "B25", src: `${bebekdengklek}`, desc: "Jollybee itu komunitas yang ngubah rutinitas kuliahku yang awalnya cuman kupu-kupu (kuliah pulang-kuliah pulang) sekarang jadi ada tujuan selama berkuliah. Di Jollybee, kita benar-benar dibina untuk dapat meningkatkan kemampuan ebrpikir, berkomunikasi, dan kerja sama kita. Materi-materi dan latihan yang diberikan juga kualitasnya TOP deh. <br><br> Selain itu, di Jollybee kita juga bisa have fun bersama. Sesi board game, company visit, dan makan-makan bersama merupakan sesi paling menyenangkan buatku. Gak bakal nyesel deh join Jollybee."},
        {name: "Naga-Unyu", year: "B26", src: `${bebekdengklek}`, desc: "Jollybee komunitasnya sangat asik, seru, dan relaxing. Tapi pada saat yang sama training dan komunitas ini sangat membangun dan memfasilitasi para anggotanya untuk berkembang ^_^"},
        {name: "Shiba", year: "B18", src: `${bebekdengklek}`, desc: "I asked myself a lot of \"What if ...\" questions. One of them is \"What if I didn't join Jollybee back then?\"<br><br> 1. I don't think I'll have the foundations necessary to pass the coding interview for working abroad. I wasn't a confident person as well and being surrounded by suppportive and amazing people boosted my confidence which helped me to better unlock my potentials. <br><br> 2. I wouldn't have traveled to many different places both abroad and cities within Indonesia. Jollybee was very generous in their funding for competitions. <br><br> And lastly, I wouldn't meet all my friends."},
    ]) 
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