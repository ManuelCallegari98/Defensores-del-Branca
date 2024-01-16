import { useState, useId } from 'react';
import './Filtros.css';
import { useFilters } from '../hooks/useFilters';


export function Filtros () {
    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) =>{

        setFilters(prevState => ({
            ... prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ... prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filtros font-custom">

        
        <div>
            <label htmlFor="{minPriceFilterId}">Precio</label>
            <input 
                type="range"
                id={minPriceFilterId}
                min="0"
                max="15000"
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
            />
            <span>${filters.minPrice}</span>
        </div>
        
        <div>
            <label htmlFor={categoryFilterId}>Categoria</label>
            <select id={categoryFilterId} onChange={handleChangeCategory}>
                <option value="All">Todas</option>
                <option value="Camiseta">Camisetas</option>
                <option value="Short">Shorts</option>
                <option value="Accesorio">Accesorios</option>
            </select>
        </div>

        </section>

    )
}