import React, { useState } from "react";
import { productos } from "../mocks/productos.json";
import { Productos } from "./Productos";

const Team = () => {
    const [filters, setFilters] = useState({
        category: 'All',
        minPrice: 0
    });

    const filterProducts = (productos) => {
        return productos.filter(productos => {
           return (
            productos.precio >= filters.minPrice &&
            (
                filters.category === 'All' ||
                productos.categoria === filters.category
            )
           ) 
        })
    }

    const filteredProducts =filterProducts(productos)

    return (
        
       <Productos productos={filteredProducts} />

        
    );
};

export default Team