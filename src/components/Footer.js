import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>Contacto: klcajas1@espe.edu.ec / jaferrin@espe.edu.ec </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.facebook.com/vlad.dragon.son" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
          <a href="https://x.com/LizzRec08" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a>
          <a href="https://www.instagram.com/timburton/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
