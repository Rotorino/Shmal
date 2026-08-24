import React from 'react';

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>Персональная страница</h1>
        <img 
          src="https://i.postimg.cc/FRwQhz2n/c635bddaf96a111f30cec0ed69cb33c3-192311077.jpg" 
          alt="Горбатков Никита Романович" 
          className="photo" 
        />
        <div className="info">
          <p><strong>ФИО:</strong> Горбатков Никита Романович</p>
          <p><strong>Телефон:</strong> +79528170923</p>
          <p><strong>Email:</strong> arrivalofmiseryofficial@gmail.com</p>
          <p><strong>Город:</strong> г. Краснодар</p>
          <p><strong>Опыт работы:</strong> Великий программист HTML 20 лет стажа в компании WikiLigs</p>
          <p><strong>Навыки:</strong> Устойчивость</p>
        </div>
      </div>
    </div>
  );
}

export default App;
