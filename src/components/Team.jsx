import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Team.css'
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { players } from '../mocks/players.json'

const Team = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
        <img src="/LogoDDB.png" alt="Logo Defensores del Branca" className='logo' />
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 10,
              stretch: 10,
              depth: 50,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"

            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {players.map((player, index) => (
                <SwiperSlide key={index}>
                    <div className="flex flex-col items-center font-custom text-verdeDDB text-xl font-bold">
                        <p className={index === activeIndex ? 'opacity-100' : 'opacity-0'}>{player.alt}</p>
                        <img src={player.img} alt={player.alt} className={index === activeIndex ? 'opacity-100' : 'opacity-60'} style={{ objectFit: 'cover', height: '100%' }} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </>
      );
    }

export default Team