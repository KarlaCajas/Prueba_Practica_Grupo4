import React from 'react';

const Gallery = () => {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg'
  ];

  return (
    <section id="gallery" className="container mx-auto my-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Galería</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${index + 1}`}
            className="w-full max-w-[350px] h-auto rounded-lg"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;

