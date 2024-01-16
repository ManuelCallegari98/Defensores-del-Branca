import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Partidos = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const next = () => {
        setCurrentIndex((currentIndex + 1) % partidos.length);
    };

    const prev = () => {
        setCurrentIndex((currentIndex - 1 + partidos.length) % partidos.length);
    };

    // Aquí puedes obtener los partidos desde una API o un archivo local

    const partidos = [
        {
            equipoLocal: "Defensores del Branca",
            equipoVisitante: "Al-Banhil",
            fecha: "31/05/2023",
            hora: "12:00",
            estadio: "Club de Suboficiales del Ejército Argentino",
            resultado: "3 x 0",
            escudoLocal: "/LogoDDB.png",
            escudoVisitante: "/al-banhilFC.png",
        },
        {
            equipoLocal: "Defensores del Branca",
            equipoVisitante: "Maple United",
            fecha: "16/06/2023",
            hora: "12:00",
            estadio: "Club de Suboficiales del Ejército Argentino",
            resultado: "0 x 1",
            escudoLocal: "/LogoDDB.png",
            escudoVisitante: "/MapleUnited.png",
        },
        {
            equipoLocal: "Defensores del Branca",
            equipoVisitante: "Los Vittors FC",
            fecha: "23/06/2023",
            hora: "12:00",
            estadio: "Club de Suboficiales del Ejército Argentino",
            resultado: "1 x 1",
            escudoLocal: "/LogoDDB.png",
            escudoVisitante: "/LosVittors.png",
        },
        {
            equipoLocal: "Defensores del Branca",
            equipoVisitante: "Cortar y Comer",
            fecha: "30/06/2023",
            hora: "12:00",
            estadio: "Club de Suboficiales del Ejército Argentino",
            resultado: "3 x 1",
            escudoLocal: "/LogoDDB.png",
            escudoVisitante: "/DeportivoCYC.png",
        },
        {
            equipoLocal: "Defensores del Branca",
            equipoVisitante: "Real Suciedad",
            fecha: "03/09/2023",
            hora: "12:00",
            estadio: "Club de Suboficiales del Ejército Argentino",
            resultado: "0 x 1",
            escudoLocal: "/LogoDDB.png",
            escudoVisitante: "/Real-Sociedad-Logo.png",
        },
        {
            equipoLocal: "Defensores del Branca",
            equipoVisitante: "La Negra FC",
            fecha: "20/09/2023",
            hora: "12:00",
            estadio: "Club de Suboficiales del Ejército Argentino",
            resultado: "1 x 0",
            escudoLocal: "/LogoDDB.png",
            escudoVisitante: "/LaNegraFC.png",
        },
        {
            equipoLocal: "Defensores del Branca",
            equipoVisitante: "Pipore",
            fecha: "18/10/2023",
            hora: "12:00",
            estadio: "Club de Suboficiales del Ejército Argentino",
            resultado: "0 x 1",
            escudoLocal: "/LogoDDB.png",
            escudoVisitante: "/pipore.png",
        },
        // Otros partidos...
    ];

    return (
        <div className="col-span-12 md:col-span-4 h-[20vh] md:h-[30vh] w-full md:w-auto font-custom animate-fade-down animate-once animate-duration-400 animate-delay-[200ms] animate-ease-in">
            <h1 className="text-xl text-left rounded-sm">Calendario 2023</h1>
            <div className="relative h-full w-full rounded-lg overflow-hidden border-2 border-rojoDDB">
                <div className="absolute left-2 flex flex-col items-center ">
                    <img
                        alt={partidos[currentIndex].equipoLocal}
                        src={partidos[currentIndex].escudoLocal}
                        className="h-20 w-auto object-cover"
                    />
                </div>
                <div className="absolute right-2 flex flex-col items-center ">
                    <img
                        alt={partidos[currentIndex].equipoVisitante}
                        src={partidos[currentIndex].escudoVisitante}
                        className="h-20 w-auto object-cover"
                    />
                </div>
                <div className="absolute bottom-0 grid h-full w-full place-items-end">
                    <div className="w-full text-center pb-4">
                        <time dateTime={partidos[currentIndex].fecha} className="block text-xs text-black/90">
                            {partidos[currentIndex].fecha} - {partidos[currentIndex].hora}
                        </time>
                        <h3 className="mt-0.5 text-lg text-black">{partidos[currentIndex].equipoLocal} vs {partidos[currentIndex].equipoVisitante}</h3>
                        <p className="mt-2 line-clamp-3 text-lg/relaxed text-black/95">
                            {partidos[currentIndex].resultado}
                        </p>
                    </div>
                </div>
                <button className="absolute left-0 bottom-0 bg-[#870A28] hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={prev}>
                    <FaChevronLeft />
                </button>
                <button className="absolute right-0 bottom-0 bg-[#870A28] hover:bg-red-900 text-white font-bold py-2 px-4 rounded" onClick={next}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
    


};

export default Partidos;
