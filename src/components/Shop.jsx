import React from "react";


const Shop = () => {
    return (
        <section>
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header class="text-center">
                    <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Colección 2023</h2>

                    <p class="mx-auto mt-4 max-w-500px text-xl text-gray-500">
                    Bienvenidos a la nueva era de la pasión y el orgullo en la cancha.
                     Presentamos la colección "Aguilas Guerreras", una línea de indumentaria deportiva diseñada exclusivamente
                      para los fanaticos que defienden los colores de este glorioso equipo.
                    </p>
                </header>

                <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <li>
                        <a href="#" class="group block overflow-hidden">
                            <img
                                src="https://i.ibb.co/bFVWSkt/Alternativa.jpg"
                                alt=""
                                class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />

                            <div class="relative bg-white pt-3">
                                <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Camiste Titular 2023
                                </h3>

                                <p class="mt-2">
                                    <span class="sr-only"> Regular Price </span>

                                    <span class="tracking-wider text-gray-900"> $ 10.000  </span>
                                </p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="group block overflow-hidden">
                            <img
                                src="Arquero.jpg"
                                alt=""
                                class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />

                            <div class="relative bg-white pt-3">
                                <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Camiseta Arquero 2023
                                </h3>

                                <p class="mt-2">
                                    <span class="sr-only"> Regular Price </span>

                                    <span class="tracking-wider text-gray-900"> $ 10.000 </span>
                                </p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="group block overflow-hidden">
                            <img
                                src="Stickers.jpg"
                                alt=""
                                class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />

                            <div class="relative bg-white pt-3">
                                <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Sticker Escudo
                                </h3>

                                <p class="mt-2">
                                    <span class="sr-only"> Regular Price </span>

                                    <span class="tracking-wider text-gray-900"> $ 250 </span>
                                </p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="group block overflow-hidden">
                            <img
                                src="Llaveros.jpg"
                                alt=""
                                class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />

                            <div class="relative bg-white pt-3">
                                <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Llavero Escudo
                                </h3>

                                <p class="mt-2">
                                    <span class="sr-only"> Regular Price </span>

                                    <span class="tracking-wider text-gray-900"> $ 700 </span>
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>

    );
};

export default Shop