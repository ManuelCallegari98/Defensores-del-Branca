import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLogout, AiOutlineLogin } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";

import Weather from "./Weather";


const Navigation = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Obtener el usuario del sessionStorage
        const user = sessionStorage.getItem("usuario");
        if (user) {
            setUser(user);
        }
    }, []);

    function logout() {
        sessionStorage.removeItem("usuario");
        setUser(null);
        navigate("/")
        window.location.reload()
    }

    function login() {
        navigate("/login");
    }

    const navigate = useNavigate()

    return (
        <header className="font-custom text-white body-font bg-[#870A28] w-full z-10">
            <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                <nav className="sticky flex lg:w-2/5 text-xl flex-wrap items-center tmd:ml-auto">
                    <Button variant="text" size="sm" className="mr-1 text-white"> <Link to="/" >Inicio</Link> </Button>
                    <Button variant="text" size="sm" className="mr-1 text-white"> <Link to="/shop" >Tienda</Link> </Button>
                    <Button variant="text" size="sm" className="mr-1 text-white"> <Link to="/team" >Equipo</Link> </Button>
                    <Button variant="text" size="sm" className="mr-1 text-white"> <Link to="/history" >Historia</Link> </Button>

                </nav>
                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <Link to="/" className="flex items-center text-white text-xl"><img src="/LogoDDB.png" cursor="pointer" alt="Logo" width={50} height={70} layout="fill" className="transition-all duration-300 transform hover:scale-110 mr-2" />{' '}Defensores del Branca</Link>

                </a>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-1 lg:ml-0">
                    <Weather />
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        {user ? (
                            <Menu>
                                <MenuHandler>
                                    <Button
                                        className="inline-flex items-center bg-[#00613c] border-0 py-1 px-3 focus:outline-none hover:bg-[#00613cae] rounded text-base mt-4 md:mt-0"
                                    >
                                        <BsFillPersonFill />
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem onClick={() => navigate("/profile")}>
                                        Perfil
                                    </MenuItem>
                                    <MenuItem onClick={logout} className="inline-flex justify-between">Salir <AiOutlineLogout /></MenuItem>
                                </MenuList>
                            </Menu>
                        ) : (
                            <Button size="sm" className="inline-flex items-center bg-[#00613c]  focus:outline-none hover:bg-[#00613cae] mt-4 md:mt-0"                            >
                                <AiOutlineLogin onClick={login} />
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navigation