import React from "react";
import Noticias from "./Noticias";
import Partidos from "./Partidos";
import TablaPosiciones from "./Posiciones";


const Home = () => {
    return (
    
        <div className="grid grid-cols-12 gap-4 px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
            <Noticias className="col-span-12 md:col-span-8 animate-jump-in animate-once animate-duration-500 animate-delay-500 animate-ease-in" />
            <div className="col-span-12 md:col-span-4 flex flex-col ">
                <Partidos className="mb-8 animate-jump-in animate-once animate-duration-500 animate-delay-1000 animate-ease-in" />
                <TablaPosiciones className="" />
            </div>

        </div>
    );
};

export default Home