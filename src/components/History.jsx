import React from 'react';

const History = () => {
    return (
        <div className="flex flex-col items-center font-custom p-4 flex-grow max-w-7xl mx-auto">
            {/* Logo de fondo mejorado */}
            <img 
                src="/LogoDDB.png" 
                alt="Logo Defensores del Branca" 
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1] w-auto md:h-[80vh] h-[40vh] opacity-5 blur-sm"
            />

            {/* Título con mejor espaciado y estilo */}
            <h2 className="text-4xl font-bold text-verdeDDB mb-8 mt-4 border-b-4 border-verdeDDB pb-2">
                Nuestra Historia
            </h2>

            {/* Primera sección */}
            <div className="p-4 gap-8 flex flex-col md:flex-row items-center justify-center mb-12 hover:shadow-xl transition-shadow duration-300 rounded-xl">
                <div className='text-lg max-w-2xl space-y-6'>
                    <p className="text-black text-justify leading-relaxed">
                        ¡Bienvenidos a la historia apasionante de los Defensores del Branca, un equipo forjado en la pasión del fútbol argentino y el compañerismo inquebrantable! Todo comenzó un 5 de abril de 2018, cuando un grupo de amigos decidieron dar vida a un sueño compartido: formar un equipo que trascendiera más allá del juego en la cancha.
                    </p>
                    <p className="text-black text-justify leading-relaxed">
                        Ubicados en el corazón de Concepción del Uruguay, nuestro hogar inicialmente se encontraba en el complejo cercano a la facultad, en la emblemática 3 de febrero 740. En esos primeros días, el equipo carecía de colores definidos y un escudo distintivo; sin embargo, la pasión, la amistad y el amor por el Branca eran los verdaderos emblemas que nos unían en cada partido.
                    </p>
                    <p className="text-black text-justify leading-relaxed">
                        En nuestros primeros encuentros, el "Defe" del Branca se destacaba con camisetas de color violeta, camisetas que eran prestadas desde la facultad. Con cada partido, forjábamos no solo nuestra identidad en la cancha, sino también la conexión especial que nos unía como amigos y compañeros de equipo.
                    </p>
                </div>
                <img 
                    src="/history/1.jpg" 
                    alt="Primeros días del equipo" 
                    className="h-full w-full md:h-[60vh] md:w-auto lg:h-[60vh] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" 
                />
            </div>

            {/* Segunda sección */}
            <div className="p-4 gap-8 flex flex-col md:flex-row items-center justify-center mb-12 hover:shadow-xl transition-shadow duration-300 rounded-xl">
                <img 
                    src="/history/2.jpg" 
                    alt="DDB en primer año ya con camiseta y colores propios" 
                    className="h-full w-full md:h-[60vh] md:w-auto lg:h-[60vh] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" 
                />
                <div className='text-lg max-w-2xl'>
                    <p className="text-black text-justify leading-relaxed">
                        El primer año de competición fue todo un desafío, pero demostramos desde el principio que estábamos destinados a grandes logros. Alcanzamos el subcampeonato, marcando así el inicio de un viaje lleno de emociones y desafíos. Sin embargo, la llegada del covid-19 y la transición a la virtualidad mantuvo a las águilas alejadas de las canchas durante un tiempo.
                    </p>
                </div>
            </div>

            {/* Tercera sección */}
            <div className="p-4 gap-8 flex flex-col items-center justify-center mb-12">
                <div className='text-lg max-w-4xl space-y-6'>
                    <p className="text-black text-justify leading-relaxed">
                        Una vez terminó la pandemia, en el año 2022, el Defe volvió a las canchas. En ese torneo, conquistamos un destacado cuarto puesto, demostrando que nuestro compromiso y dedicación estaban más fuertes que nunca. El 2023 nos llevó aún más lejos: clasificamos a los playoffs, llegando a las semifinales, donde lamentablemente caímos en los penales.
                    </p>
                    <p className="text-black text-justify leading-relaxed">
                        A lo largo de estos años, hemos forjado más que un equipo; hemos construido una familia unida por la pasión por el fútbol y el orgullo de representar a los Defensores del Branca. Cada partido, cada derrota y cada victoria se han convertido en piezas fundamentales de nuestra historia, marcando el camino de un equipo que no solo defiende el honor en el campo, sino que también celebra la amistad y el amor por el Fernet Branca.
                    </p>
                    <p className="text-black text-justify leading-relaxed font-semibold italic">
                        ¡Acompáñanos en este viaje lleno de pasión, donde se disfruta la esencia de lo argentino: la amistad, el fútbol y el fernet Branca!
                    </p>
                </div>
                <img 
                    src="/history/3.jpg" 
                    alt="DDB juntada de despedida de año 2022" 
                    className="mt-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 max-w-4xl w-full" 
                />
            </div>
        </div>
    );
};

export default History;
