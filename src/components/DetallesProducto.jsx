import React, { useState, useContext } from "react";
import { productos as initialProductos } from "../mocks/productos.json";
import { useParams } from 'react-router-dom';
import SelectorCantidad from "./SelectorCantidad";
import { useCart } from "../hooks/useCart";
import { Cart } from "./Cart";
import { Button, Alert } from "@material-tailwind/react";



const DetallesProducto = () => {
    const { id } = useParams();
    const [productos] = useState(initialProductos)
    const idNumerico = Number(id);
    const producto = productos.find(producto => producto.id === idNumerico);

    const { addToCart } = useCart();

    const [talle, setTalle] = useState(''); // Estado para el talle

    const manejarClick = () => {
        if (!talle && producto.categoria !== 'Accesorio') {
            alert('Por favor, selecciona un talle antes de agregar al carrito');
        } else {
            addToCart(producto, 1, talle);
            //alert("Se añadio producto: " + producto.nombre + " talle " + talle + " al carrito")
        }
    };


    return (
        <div class="flex flex-col md:flex-row font-custom h-screen">
            <div class="w-full md:w-1/2 p-4">
                <img src={producto.imagen} alt={producto.descripcion} class="mx-auto" style={{ maxWidth: "100%", maxHeight: "100vh" }} />
            </div>
            <div class="w-full md:w-1/2 p-4 bg-white rounded-lg shadow dark:bg-gray-800 font-custom">
                <h1 class="text-lg font-semibold dark:text-gray-50 mb-2">
                    {producto.nombre}
                </h1>
                <div class="text-lg text-black dark:text-gray-300 mb-4">
                    $ {producto.precio}
                </div>
                <div className="mb-2">
                    {producto.descripcion}
                </div>
                {producto.categoria !== "Accesorio" && (
                    <div class="mb-4">
                        <div class="flex space-x-2">
                            <label class="text-center">
                                <input type="radio" onChange={() => setTalle('XS')} class="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-lg dark:bg-gray-600" name="size" value="xs" />
                                XS
                            </label>
                            <label class="text-center">
                                <input type="radio" onChange={() => setTalle('S')} class="flex items-center justify-center w-6 h-6" name="size" value="s" />
                                S
                            </label>
                            <label class="text-center">
                                <input type="radio" onChange={() => setTalle('M')} class="flex items-center justify-center w-6 h-6" name="size" value="m" />
                                M
                            </label>
                            <label class="text-center">
                                <input type="radio" onChange={() => setTalle('L')} class="flex items-center justify-center w-6 h-6" name="size" value="l" />
                                L
                            </label>
                            <label class="text-center">
                                <input type="radio" onChange={() => setTalle('XL')} class="flex items-center justify-center w-6 h-6" name="size" value="xl" />
                                XL
                            </label>
                        </div>
                    </div>
                )}

                <Button onClick={manejarClick} className="py-2 px-4 bg-verdeDDB hover:bg-verdeDDB-900 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg ">
                    Agregar al Carrito
                </Button>

            </div>
            <Cart />
        </div>
    );
};

export default DetallesProducto;

