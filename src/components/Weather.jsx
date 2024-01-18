import React, { useEffect, useState } from 'react';
import { WiDaySunny } from "react-icons/wi";


const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({});

  useEffect(() => {
    // Obtener la ubicación del usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log('La geolocalización no está disponible en este navegador.');
    }
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      // URL de la API
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=3d98a7d27e160bee16227009c76940e9&lang=es`;

      // Realizar la solicitud
      fetch(url)
        .then(response => response.json())
        .then(data => setWeatherData(data))
        .catch(err => console.error(err));
    }
  }, [location]);

  if (!weatherData) return <div className='aspect-square w-8 flex justify-center items-center animate-spin animate-duration-[2500ms]'><WiDaySunny size={28} /> </div>;

  const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

  return (
    <div className="flex items-center text-white">
      <img src={iconUrl} alt="Icono del tiempo" className="mr-2" />
      <p className="text-xl">{Math.round(weatherData.main.temp - 273.15)}°C</p>
    </div>
  );
};


  
export default Weather;
