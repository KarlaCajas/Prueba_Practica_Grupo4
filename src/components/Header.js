import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <img src="/images/logo1.jpg" alt="Logo" className="h-12 w-auto" />
        <h1 className="text-2xl font-bold ml-2">Prueba Practica Grupo 4</h1>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-400">Inicio</Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-gray-400">Galería</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

