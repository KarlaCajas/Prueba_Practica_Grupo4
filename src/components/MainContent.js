import React from 'react';

const MainContent = ({ showModal }) => {
  return (
    <main className="container mx-auto my-8 p-4">
      <h1 className="text-4xl font-bold mb-4">Películas de Tim Button</h1>
      <p className="mb-8">La esencia de las películas de Tim Burton se caracteriza por un universo visualmente distintivo y oscuro, donde la fantasía y lo macabro se entrelazan de manera única. Sus historias suelen explorar la alienación, la diferencia y la búsqueda de identidad, a menudo a través de personajes excéntricos y mundos surrealistas que desafían la realidad convencional. Burton combina elementos góticos con un toque de humor negro, creando un estilo cinematográfico inconfundible que ha dejado una marca indeleble en el cine contemporáneo.</p>
      <button 
        onClick={showModal} 
        className="bg-gray-800 text-white py-2 px-4 rounded">
        Mostrar Mensaje
      </button>
    </main>
  );
}

export default MainContent;
