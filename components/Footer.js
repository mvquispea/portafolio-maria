import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="text-center py-6 text-gray-500">
      <p>© 2025. Desarrollado por <span className="text-blue-600 font-semibold">MARÍA QUISPE</span></p>
      <div className="flex justify-center mt-2 space-x-4 text-2xl text-gray-600">
        <a href="https://github.com/mvquispea" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mvquispea/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:mvquispea@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://wa.me/51996336287" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;