import React from 'react';

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>Домашний любимец</h1>
        <img 
          src="https://i.postimg.cc/tRLXjvbj/5fc2513c7a3c8900520b5cbebb49a32b-1329482179.jpg" 
          alt="Агузок" 
          className="photo" 
        />
        <div className="info">
          <p><strong>Вид:</strong> Собака</p>
          <p><strong>Кличка:</strong> Агузок</p>
          <p><strong>Возраст:</strong> 6</p>
          <p><strong>Описание:</strong> 67676767676767</p>
        </div>
      </div>
    </div>
  );
}

export default App;
