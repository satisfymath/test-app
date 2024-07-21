import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Estudiemos Nutrición</h1>
        <p>Bienvenido a tu recurso principal de información nutricional.</p>
      </header>
      
      <section className="home-intro">
        <h2>Sobre Nosotros</h2>
        <p>En Estudiemos Nutrición, nos dedicamos a brindar información precisa y útil sobre nutrición para ayudarte a llevar un estilo de vida saludable.</p>
      </section>
      
      <section className="home-features">
        <h2>Lo Que Ofrecemos</h2>
        <div className="feature">
          <h3>Artículos Informativos</h3>
          <p>Explora una variedad de artículos sobre temas clave en nutrición.</p>
        </div>
        <div className="feature">
          <h3>Recetas Saludables</h3>
          <p>Descubre recetas que te ayudarán a mantener una dieta equilibrada.</p>
        </div>
        <div className="feature">
          <h3>Consejos de Expertos</h3>
          <p>Recibe consejos de nutricionistas y expertos en salud.</p>
        </div>
      </section>
      
      <section className="home-contact">
        <h2>Contacto</h2>
        <p>Síguenos en Instagram: <a href="https://www.instagram.com/estudiemos.nutricion/" target="_blank" rel="noopener noreferrer">@estudiemos.nutricion</a></p>
        <p>Para más información, envíanos un correo a: contacto@estudiemosnutricion.com</p>
      </section>
    </div>
  );
};

export default Home;
