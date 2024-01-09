import React from 'react';

const TablaPosiciones = () => {
  const equipos = [
    {
      nombre: 'Maple United',
      pj: 7,
      pts: 15,
      escudo: '/MapleUnited.png',
    },
    {
      nombre: 'Los Vittors',
      pj: 7,
      pts: 14,
      escudo: '/LosVittors.png',
    },
    {
      nombre: 'Pipore',
      pj: 7,
      pts: 11,
      escudo: '/pipore.png',
    },
    {
      nombre: 'Defensores del Branca',
      pj: 7,
      pts: 10,
      escudo: '/LogoDDB.png',
      color: 'bg-rojoDDB',
    },
    {
      nombre: 'Real Suciedad',
      pj: 7,
      pts: 10,
      escudo: '/Real-Sociedad-Logo.png',
    },
    {
      nombre: 'La Negra FC',
      pj: 7,
      pts: 10,
      escudo: '/LaNegraFC.png',
    },
    {
      nombre: 'Cortar y Comer',
      pj: 7,
      pts: 4,
      escudo: '/DeportivoCYC.png',
    },
    {
      nombre: 'Al-Banhil',
      pj: 7,
      pts: 1,
      escudo: '/al-banhilFC.png',
    },
    // Agrega más equipos aquí...
  ];

  return (



    <div className="w-full mx-auto m-10 p-1 font-custom">
      <h1 className='text-xl text-left'>Tabla de Posiciones</h1>
      <div className='border-t-4 border-verdeDDB border-b-4'>
        <table className="w-full bg-white table-auto">
          <thead>
            <tr className='border-b-2 border-verdeDDB'>
              <th className="py-2 px-3 ">#</th>
              <th className="py-2 px-3 "></th>
              <th className="py-2 px-3 ">Equipo</th>
              <th className="py-2 px-3 ">PJ</th>
              <th className="py-2 px-3 ">Pts</th>
            </tr>
          </thead>
          <tbody>
            {equipos.map((equipo, index) => (
              <tr key={index} className={`${equipo.color} border-b-2 border-verdeDDB`}>
                {/* Añade el color de fondo y la línea de color */}
                <td className="border-t py-2 px-3 ">{index + 1}</td>
                <td className="border-t py-2 px-3 "><img src={equipo.escudo} alt={equipo.nombre} className="inline-block mr-2 h-7 w-auto" /></td>
                <td className="border-t py-2 px-3 ">{equipo.nombre}</td>
                <td className="border-t py-2 px-3 ">{equipo.pj}</td>
                <td className="border-t py-2 px-3 ">{equipo.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

};

export default TablaPosiciones;