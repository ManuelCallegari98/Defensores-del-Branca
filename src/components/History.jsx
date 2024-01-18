import React from 'react';

const History = () => {
    return (
        <div className="flex flex-col items-center font-custom p-4 flex-grow">
            <img src="/LogoDDB.png" alt="Descripción de la imagen" className="fixed top-[45%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-[-1] w-auto h-[40vh] opacity-30" />
            <h2 className="text-2xl font-bold ">Nuestra Historia</h2>
            <div className="p-1 gap-2 flex flex-col md:flex-row items-center justify-center pt-12 ">
                <div>
                    <p className="text-black text-center ">
                        ¡Bienvenidos a la historia apasionante de los Defensores del Branca, un equipo forjado en la pasión del fútbol argentino y el compañerismo inquebrantable! Todo comenzó un 5 de abril de 2018, cuando un grupo de amigos decidieron dar vida a un sueño compartido: formar un equipo que trascendiera más allá del juego en la cancha.
                    </p>
                    <p className="text-black text-center">
                        Ubicados en el corazón de Concepción del Uruguay, nuestro hogar inicialmente se encontraba en el complejo cercano a la facultad, en la emblemática 3 de febrero 740. En esos primeros días, el equipo carecía de colores definidos y un escudo distintivo; sin embargo, la pasión, la amistad y el amor por el Branca eran los verdaderos emblemas que nos unían en cada partido.
                    </p>
                    <p className="text-black text-center">
                        En nuestros primeros encuentros, el "Defe" del Branca se destacaba con camisetas de color violeta, camisetas que eran prestadas desde la facultad. Con cada partido, forjábamos no solo nuestra identidad en la cancha, sino también la conexión especial que nos unía como amigos y compañeros de equipo.
                    </p>
                </div>
                <img src="https://i.ibb.co/WVngRxL/1er-A-o-DDB.jpg" alt="Imagen 1" className="h-[60vh] md:order-last" />
            </div>
            <div className="p-1 gap-2 flex flex-col md:flex-row items-center justify-center pt-12">
                <img src="https://i.ibb.co/LPYc6Ys/2018DDB.jpg" alt="DDB en primer año ya con camiseta y colores propios" className="h-[60vh] md:order-first" />
                <div>
                    <p className="text-black text-center">
                        El primer año de competición fue todo un desafío, pero demostramos desde el principio que estábamos destinados a grandes logros. Alcanzamos el subcampeonato, marcando así el inicio de una viaje lleno de emociones y desafíos. Sin embargo, la llegada del covid-19 y la transición a la virtualidad mantuvo a las águilas alejadas de las canchas durante un tiempo.
                    </p>
                </div>
            </div>

            <div className="p-1 gap-2 flex flex-col md:flex-row items-center justify-center pt-4">
                <div>
                    <p className="text-black text-center">
                        Una vez termino la pandemia, en el año 2022, el Defe volvio a las canchas. En ese torneo, conquistamos un destacado cuarto puesto, demostrando que nuestro compromiso y dedicación estaban más fuertes que nunca. El 2023 nos llevó aún más lejos: clasificamos a los playoffs, llegando a las semifinales, donde lamentablemente caímos en los penales.
                    </p>
                    <p className="text-black text-center">
                        A lo largo de estos años, hemos forjado más que un equipo; hemos construido una familia unida por la pasión por el fútbol y el orgullo de representar a los Defensores del Branca. Cada partido, cada derrota y cada victoria se han convertido en piezas fundamentales de nuestra historia, marcando el camino de un equipo que no solo defiende el honor en el campo, sino que también celebra la amistad y el amor por el Fernet Branca
                    </p>
                    <p className="text-black text-center">
                        ¡Acompáñanos en este viaje lleno de pasión, donde se disfruta la escensia de lo argentino: la amistad, el futbol y el fernet Branca!
                    </p>
                </div>
            </div>
            <img src="https://i.ibb.co/5LQXRTj/93cc9ea3-b452-4816-8e63-4d5d2188bcdf-1.jpg" alt="DDB juntada de despedida de año 2022" className="pt-4" />
        </div>
    );
};

export default History;
