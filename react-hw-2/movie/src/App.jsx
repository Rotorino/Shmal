import React from 'react';

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>Любимый кинофильм</h1>
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Back_to_the_Future.jpg/250px-Back_to_the_Future.jpg" 
          alt="Back to the Future" 
          className="poster" 
        />
        <div className="info">
          <p><strong>Название:</strong> Back to the Future</p>
          <p><strong>Режиссер:</strong> Robert Zemeckis</p>
          <p><strong>Год выпуска:</strong> 1985</p>
          <p><strong>Киностудия:</strong> Universal Pictures</p>
        </div>
      </div>
    </div>
  );
}

export default App;
