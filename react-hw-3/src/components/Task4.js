import React from 'react';

class Task4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
      isShaking: false,
      answers: [
        'Безусловно', 'Без сомнений', 'Да, определённо', 'Можешь рассчитывать',
        'Как я вижу - да', 'Скорее всего', 'Взгляд хороший', 'Да',
        'Ответ неясен', 'Спроси позже', 'Не сейчас', 'Не могу предсказать',
        'Не рассчитывай', 'Мой ответ - нет', 'Источники говорят нет', 'Сомнительно'
      ]
    };
  }

  ask = () => {
    if (!this.state.question.trim()) return;
    this.setState({ isShaking: true, answer: '' });
    
    setTimeout(() => {
      const rand = this.state.answers[Math.floor(Math.random() * this.state.answers.length)];
      this.setState({ isShaking: false, answer: rand });
    }, 1000);
  }

  render() {
    const { question, answer, isShaking } = this.state;
    return (
      <div className="card" style={{ maxWidth: '450px' }}>
        <div className="card-h">Оракул</div>
        <div className="oracle-box">
          <div style={{ width: '100%' }}>
            <input 
              className="oracle-input" 
              placeholder="Твой вопрос..." 
              value={question}
              onChange={(e) => this.setState({ question: e.target.value })}
              onKeyPress={(e) => e.key === 'Enter' && this.ask()}
            />
            <button 
              className="oracle-btn" 
              style={{ marginTop: '0.75rem', opacity: isShaking ? 0.6 : 1 }}
              onClick={this.ask}
              disabled={isShaking}
            >
              {isShaking ? 'МАГИЯ В ПРОЦЕССЕ...' : 'ПОЛУЧИТЬ ОТВЕТ'}
            </button>
          </div>

          <div className={`magic-circle ${isShaking ? 'shaking' : ''}`}>
            <div className="magic-window">
              {answer && !isShaking && (
                <div className="magic-text" style={{ animation: 'fadeIn 0.6s' }}>{answer}</div>
              )}
              {!answer && !isShaking && (
                <div style={{ color: '#222', fontSize: '2.5rem', fontWeight: '900' }}>8</div>
              )}
              {isShaking && (
                <div style={{ color: 'var(--accent)', fontWeight: 800 }}>...</div>
              )}
            </div>
          </div>
        </div>

        <style>{`
          .shaking { animation: shake 0.12s infinite; }
          @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
          }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        `}</style>
      </div>
    );
  }
}

export default Task4;
