import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export function CartProvider ({children}) {
    // Intenta cargar el carrito desde localStorage
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            return JSON.parse(savedCart);
        }
        // Si no hay un carrito guardado, usa un carrito vacío
        return [];
    });

    // Actualiza localStorage cada vez que cambia el carrito
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity, talle) => {
        setCart(prevCart => {
            const productInCartIndex = prevCart.findIndex(item => item.id === product.id && item.talle === talle)

            if (productInCartIndex >= 0) {
                // Si el producto ya existe en el carrito, no hagas nada
                return prevCart;
            }

            // Si el producto no existe en el carrito, agrega un nuevo producto
            return [...prevCart, {
                id: product.id,
                nombre: product.nombre,
                imagen: product.imagen,
                talle: talle,
                cantidad: quantity,
                precio: product.precio
            }];
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const updateQuantity = (productId, talle, quantity) => {
        setCart(prevCart => {
            const productInCartIndex = prevCart.findIndex(item => item.id === productId && item.talle === talle)
    
            if (productInCartIndex >= 0) {
                // Si el producto ya existe en el carrito, actualiza la cantidad
                const newCart = [...prevCart];
                newCart[productInCartIndex].cantidad = quantity;
                return newCart;
            }
    
            return prevCart;
        });
    };
    
    const removeFromCart = (product, talle) => {
        setCart(prevCart => {
            const newCart = prevCart.filter(item => !(item.id === product && item.talle === talle));

            return newCart;
        });
    };
    

    const getTotal = () => { // Función para obtener el total
        return cart.reduce((total, product) => total + product.precio * product.cantidad, 0);
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            getTotal,
            updateQuantity, 
            removeFromCart 
        }}>
            {children}
        </CartContext.Provider>
    )
}
