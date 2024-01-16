
import { Link} from 'react-router-dom';
import { Filtros } from "./Filtros";


export function Productos({ productos }) {
    return (
        <main>
            <div className='relative h-full w-full'>
                <img src="/banner.jpeg" alt="" className='h-full w-full ' />
            </div>
            <div className='mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-12 lg:px-8 font-custom'>

                <header className="text-center">

                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl animate-fade-up animate-once animate-delay-400">Colección 2023</h2>

                    <p className="mx-auto mt-4 max-w-500px text-xl text-gray-500">
                        Bienvenidos a la nueva era de la pasión y el orgullo en la cancha.
                        Presentamos la colección "Aguilas Guerreras", una línea de indumentaria deportiva diseñada exclusivamente
                        para los fanaticos que defienden los colores de este glorioso equipo.
                    </p>
                </header>

                <Filtros />

                <ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                    {productos.map(producto => (
                        <li key={producto.id} className='group block overflow-hidden'>
                            <Link to={`/producto/${producto.id}`} className="group block overflow-hidden">
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
                            </Link>    
                        </li>
                    ))}
                </ul>
            </div>
        </main>

    )
}
