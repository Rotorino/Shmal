import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>Текущее время</h1>
        <div className="time">
          {time.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}

export default App;
