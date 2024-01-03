import React from "react";
import { Link } from "react-router-dom";


const Navigation = () => {
    return (
        <header className="text-white body-font bg-[#870A28] fixed w-full">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <Link to="/home" className="mr-5 hover:text-[#00613c]">Inicio</Link>
                    <Link to="/shop" className="mr-5 hover:text-[#00613c]">Tienda</Link>
                    <Link to="/team" className="mr-5 hover:text-[#00613c]">Equipo</Link>
                    <Link to="/about" className="hover:text-[#00613c]">Nosotros</Link>
                </nav>
                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <Link to="/home"><img src="public/LogoDDB.png" cursor="pointer" alt="Logo" width={50} height={70} layout="fill" className="transition-all duration-300 transform hover:scale-110" /></Link>
                    <span className="ml-3 text-l text-white">Defensores Del Branca</span>
                </a>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    <button className="inline-flex items-center bg-[#00613c] border-0 py-1 px-3 focus:outline-none hover:bg-[#00613cae] rounded text-base mt-4 md:mt-0">Ingresar
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navigation