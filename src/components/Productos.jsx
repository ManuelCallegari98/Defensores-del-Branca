import { FaShoppingCart } from 'react-icons/fa';

export function Productos ({ productos }) {
    return (
        <main className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
            <ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                {productos.map(producto =>(
                    <li key={producto.id} className='group block overflow-hidden'>
                        <img
                            src={producto.imagen}
                            alt={producto.descripcion}
                            className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                        />
                        <div className='relative bg-white pt-3'>
                            <h3 className='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>{producto.nombre}</h3> 
                            <p className='mt-2'>
                                <span className='sr-only'>Precio Regular</span>
                                <span className='tracking-wider text-gray-900'>${producto.precio}</span>
                            </p>
                        </div>
                        <div>
                            <button className='text-center'>
                                <FaShoppingCart />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}
