import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const navigate = useNavigate();


    const login = () =>{


        if(email == 'admin' && password == '21'){
            alert('Bienvenido Admin al Defe del Branca!!!');

            //Guardar la sesión del usuario
            window.sessionStorage.setItem('usuario', email);

            navigate('/');
            window.location.reload();
      


        }else{
            alert('Email o Password incorrectos');
        }

        limpiarDatos();

    }

    function limpiarDatos() {
        setEmail('');
        setPassword('');
    }


    return (

        <section className="relative flex flex-wrap lg:h-screen lg:items-center font-custom">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl text-verdeDDB">¡Hacete fan de Defensores del Branca!</h1>

                    <p className="mt-4 text-black text-lg">
                        La amistad y el futbol son valores que nos unen en este gran equipo. Entrá, y disfrutá con nosotros, la pasión de llevar estos colores.
                    </p>
                </div>

                <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                value = { email }
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                                required
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        

                        <button
                            onClick={ login }
                            type="submit"
                            className="inline-block rounded-lg bg-verdeDDB px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>

            <div className="relative h-full w-full sm:h-96 lg:h-full lg:w-1/2">
                <img
                    alt="Welcome"
                    src="/LogoDDB.png"
                    className="absolute inset-0 h-full w-auto object-cover pb-12 pt-4"
                />
            </div>
        </section>

    );
};

export default Login