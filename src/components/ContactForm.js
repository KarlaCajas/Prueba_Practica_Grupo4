import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre es obligatorio';
    if (!formData.email) newErrors.email = 'El correo electrónico es obligatorio';
    if (!formData.message) newErrors.message = 'El mensaje es obligatorio';
    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      // Enviar el formulario
      alert('Formulario enviado exitosamente');
    } else {
      setErrors(newErrors);
    }
  }

  return (
    <section id="contact" className="container mx-auto my-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Nombre</label>
          <input 
            type="text" 
            value={formData.name} 
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
            className="w-full border border-gray-300 p-2 rounded"
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
        </div>
        <div>
          <label className="block text-gray-700">Correo Electrónico</label>
          <input 
            type="email" 
            value={formData.email} 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
            className="w-full border border-gray-300 p-2 rounded"
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>
        <div>
          <label className="block text-gray-700">Mensaje</label>
          <textarea 
            value={formData.message} 
            onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
            className="w-full border border-gray-300 p-2 rounded"
          />
          {errors.message && <span className="text-red-500">{errors.message}</span>}
        </div>
        <button type="submit" className="bg-gray-800 text-white py-2 px-4 rounded">Enviar</button>
      </form>
    </section>
  );
}

export default ContactForm;
