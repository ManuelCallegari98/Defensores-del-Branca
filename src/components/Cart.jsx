
import { BsCart, BsCartX, BsTrash3 } from "react-icons/bs";
import SelectorCantidad from "./SelectorCantidad";
import { useCart } from "../hooks/useCart";
import { Badge } from "@material-tailwind/react";

import { useState } from "react";

export function Cart() {
    const { cart, clearCart, updateQuantity, getTotal, removeFromCart } =
        useCart();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <Badge content={cart.length} withBorder className="z-10 ">

            <button
                className="p-2 bg-verdeDDB text-white rounded-full focus:outline-none z-10"
                onClick={() => setIsOpen(!isOpen)}
            >
                <BsCart />
            </button>
            </Badge>

            {isOpen && (
                <div
                    className="mt-4 font-custom absolute bottom-14 right-4 w-64 max-h-[70vh] overflow-auto border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
                    aria-modal="true"
                    role="dialog"
                    tabIndex="-1"
                >
                    <header className="flex justify-center">Tu carrito</header>
                    <aside className="cart mt-4 space-y-6">
                        <ul className="">
                            {cart.map((producto, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <button
                                        onClick={() => removeFromCart(producto.id, producto.talle)}
                                    >
                                        {" "}
                                        <BsTrash3 />{" "}
                                    </button>
                                    <img
                                        src={producto.imagen}
                                        alt={producto.descripcion}
                                        className="h-16 w-16 rounded object-cover"
                                    />
                                    <div>
                                        <h3 className="text-sm text-gray-900">{producto.nombre}</h3>
                                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                            <div>
                                                <dt className="inline">Talle: </dt>
                                                <dd className="inline">{producto.talle}</dd>
                                            </div>
                                        </dl>
                                        <h3 className="text-sm text-gray-900">
                                            ${producto.precio}
                                        </h3>
                                        <SelectorCantidad
                                            quantity={producto.cantidad}
                                            setQuantity={(newQuantity) =>
                                                updateQuantity(producto.id, producto.talle, newQuantity)
                                            }
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center items-center">
                            Total: ${getTotal()}
                        </div>
                        <div className="flex justify-center items-center">
                            {cart.length !== 0 && (
                                <button onClick={clearCart}>
                                    <BsCartX />
                                </button>
                            )}
                        </div>
                    </aside>
                </div>
            )}
        </div>
    );
}
