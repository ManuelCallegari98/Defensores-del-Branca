import { useContext } from "react"
import { FiltersContext } from "../context/filters"

export function useFilters () {
    
    const { filters, setFilters } = useContext(FiltersContext)

    const filterProducts = (productos) => {
        return productos.filter(producto => {
           return (
            producto.precio >= filters.minPrice &&
            (
                filters.category === 'All' ||
                producto.categoria === filters.category
            )
           ) 
        })
    }

    return { filters, filterProducts, setFilters }
}