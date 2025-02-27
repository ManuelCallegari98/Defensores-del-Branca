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
      <div className="flex flex-col items-center font-custom p-4 flex-grow">
          <img src="/LogoDDB.png" alt="Logo Defensores del Branca" className='logo' />
          <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                  rotate: 20,        // Aumentamos la rotación
                  stretch: 0,        // Reducimos el estiramiento
                  depth: 100,        // Aumentamos la profundidad
                  modifier: 2,       // Aumentamos el modificador
                  slideShadows: true // Activamos las sombras para más profundidad
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
              {players.map((player, index) => (
                  <SwiperSlide key={index}>
                      <div className="flex flex-col items-center font-custom text-verdeDDB text-2xl font-bold"> {/* Aumentamos el tamaño del texto */}
                          <p className={`${index === activeIndex ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>{player.alt}</p>
                          <img 
                              src={player.img} 
                              alt={player.alt} 
                              className={`${index === activeIndex ? 'opacity-100' : 'opacity-40'} transition-opacity duration-300`} 
                          />
                      </div>
                  </SwiperSlide>
              ))}
          </Swiper>
      </div>
  );
}

export default Team