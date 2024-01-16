import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { Badge, Button} from "@material-tailwind/react";


const Navigation = () => {
    return (
            <header className="font-custom text-white body-font bg-[#870A28] w-full z-10">
                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <nav className="sticky flex lg:w-2/5 text-xl flex-wrap items-center tmd:ml-auto">
                    <Button variant="text" className="mr-1 text-white"> <Link to="/" >Inicio</Link> </Button> 
                    <Button variant="text" className="mr-1 text-white"> <Link to="/shop" >Tienda</Link> </Button>
                    <Button variant="text" className="mr-1 text-white"> <Link to="/team" >Equipo</Link> </Button>
                    <Button variant="text" className="mr-1 text-white"> <Link to="/about" >Nosotros</Link> </Button>
                         
                    </nav>
                    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                        <Link to="/" className="flex items-center text-white text-xl"><img src="/LogoDDB.png" cursor="pointer" alt="Logo" width={50} height={70} layout="fill" className="transition-all duration-300 transform hover:scale-110 mr-2" />{' '}Defensores del Branca</Link>
                        
                    </a>
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                            <button className="inline-flex items-center bg-[#00613c] border-0 py-1 px-3 focus:outline-none hover:bg-[#00613cae] rounded text-base mt-4 md:mt-0">
                                --
                            </button>
                    </div>
                </div>
            </header>
    );
};

export default Navigation