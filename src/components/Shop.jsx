import React, {  useState } from "react";
import { productos as initialProductos } from "../mocks/productos.json";
import { Productos } from "./Productos";
import { useFilters } from "../hooks/useFilters";
import { Cart } from "./Cart";

const Shop = () => {
    const [productos] = useState(initialProductos)
    const { filterProducts } = useFilters()
    const filteredProducts = filterProducts(productos)

    return (
        <>

        <Cart />
        <Productos productos={filteredProducts} />
        
        </>
        
    );
};

export default Shop