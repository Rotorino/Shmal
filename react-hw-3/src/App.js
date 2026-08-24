import React from 'react';
import './App.css';
import Task1 from './components/Task1';
import Task3 from './components/Task3';
import Task4 from './components/Task4';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    // Задание 2: Случайный выбор стиля при загрузке
    const styleIdx = Math.floor(Math.random() * 4);
    
    this.state = {
      view: 'overview',
      themeIdx: styleIdx
    };
  }

  componentDidMount() {
    this.updateBodyClass();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.themeIdx !== this.state.themeIdx) {
      this.updateBodyClass();
    }
  }

  updateBodyClass = () => {
    document.body.className = `theme-${this.state.themeIdx}`;
  }

  // Возможность сменить стиль по клику
  toggleStyle = () => {
    this.setState(prevState => ({
      themeIdx: (prevState.themeIdx + 1) % 4
    }));
  }

  render() {
    const { view } = this.state;

    return (
      <div className="app-container">
        <header className="header">
          <div className="logo">FOOTBALL<span>HUB</span></div>
          
          <nav className="nav-links">
            <button 
              className={`nav-btn ${view === 'overview' ? 'active' : ''}`}
              onClick={() => this.setState({ view: 'overview' })}
            >
              Клуб
            </button>
            <button 
              className={`nav-btn ${view === 'catalog' ? 'active' : ''}`}
              onClick={() => this.setState({ view: 'catalog' })}
            >
              Каталог
            </button>
            <button 
              className={`nav-btn ${view === 'oracle' ? 'active' : ''}`}
              onClick={() => this.setState({ view: 'oracle' })}
            >
              Оракул
            </button>
          </nav>

          <div className="accent-box" onClick={this.toggleStyle} style={{ cursor: 'pointer' }}>
            <div className="accent-circle"></div>
            Стиль
          </div>
        </header>

        <main>
          {view === 'overview' && <Task1 />}
          {view === 'catalog' && <Task3 />}
          {view === 'oracle' && <Task4 />}
        </main>
      </div>
    );
  }
}

export default App;
