import { Link } from "react-router-dom";

export function Error() {
    return (
        <div className="flex h-screen flex-col bg-white">
            <img
                src="/error.jpeg"
                alt=""
                className="h-64 w-full object-cover"
            />

            <div className="flex flex-1 items-center justify-center">
                <div className="mx-auto max-w-xl px-4 py-8 text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        No encontramos esa página
                    </h1>

                    <p className="mt-4 text-gray-500">
                        Intenta nuevamente, o retorna al inicio para volver a empezar.
                    </p>

                    <Link
                        to={"/"}
                        className="mt-6 inline-block rounded bg-verdeDDB px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
                    >
                        Inicio
                    </Link>
                </div>
            </div>
        </div>
    )
}