import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="images/logo.png" alt="SimpleClothing Logo" width="40" />
          <span>SimpleClothing</span>
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/carrito">Carrito</a></li>
            <li><a href="/login">Iniciar Sesión</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <div className="container">
          <h1>Moda Minimalista para Todos</h1>
          <p>Diseños modernos y atemporales para tu estilo único.</p>
          <a href="/productos" className="btn">Explorar Colección</a>
        </div>
      </section>
      <section className="featured-products">
        <div className="container">
          <h2>Productos Destacados</h2>
          <div className="product-grid">
            {/* Product cards here */}
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 SimpleClothing. Todos los derechos reservados.</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="footer-links">
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos y Condiciones</a>
            <a href="#">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;