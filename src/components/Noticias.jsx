import { Carousel } from "@material-tailwind/react";

const Noticias = () => {
    // Aquí puedes obtener los partidos desde una API o un archivo local
    const noticias = [
        {
            titulo: "NO SE DIERON LOS PENALES",
            fecha: "17 Nov 2023",
            imagen: "/Publicacion.jpg",
            texto: "En el mediodía de hoy las águilas se enfrentaron por la semifinal del torneo interno UTN FRCU frente al Maple United...",
            url: "https://www.instagram.com/p/CzxCasSrMf3/",
        },
        {
            titulo: "FECHA 7: DERROTA Y CLASIFICACION",
            fecha: "18 Oct 2023",
            imagen: "/Publi2.jpg",
            texto: "Las águilas se enfrentaron, con equipación alternativa, al histórico Sportivo Pipore, con amplia trayectoria en el torneo, en un partido que tuvo de todo excepto buen fútbol...",
            url: "https://www.instagram.com/p/CyjfALFpEMV/",
        },
        {
            titulo: "LAS AGUILAS REMONTARON VUELO",
            fecha: "20 Sep 2023",
            imagen: "/Publi3.jpg",
            texto: "En el día de la fecha, el defe del Branca venció por 1 a 0 al siempre bien defendido equipo de La Negra FC por la fecha 6 del torneo interno de la UTN-FRCU...",
            url: "https://www.instagram.com/p/CxbVVu2r9PC/",
        },
        // Otras noticias...
    ];

    return (
        <div className="col-span-12 md:col-span-8 p-2 animate-fade animate-once animate-duration-400 animate-delay-[200ms] animate-ease-in">
                <Carousel className="rounded-lg shadow transition hover:shadow-lg">
                    {noticias.map((noticia) => (
                        <div className="relative h-full w-full">
                            <img
                                alt={noticia.titulo}
                                src={noticia.imagen}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute bottom-0 inset-0 grid h-full w-full place-items-end ">
                                <div className="w-full text-center pb-10 bg-black/75">
                                    <a href={noticia.url}>
                                        <time dateTime={noticia.fecha} className="block text-xs text-white/90">
                                            {noticia.fecha}
                                        </time>
                                        <h3 className="mt-0.5 text-lg text-white">{noticia.titulo}</h3>
                                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                            {noticia.texto}
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
    );
};

export default Noticias;
