import React from 'react';

// Задание 1: Отдельные компоненты для логических блоков
class ClubInfo extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="card">
        <div className="card-h">Информация</div>
        <div className="hero-box">
          <img src={data.logo} alt="Crest" />
        </div>
        <div className="data-list">
          <div className="data-row"><span>Название</span><strong>{data.fullName}</strong></div>
          <div className="data-row"><span>Город</span><strong>{data.city}</strong></div>
          <div className="data-row"><span>Основан</span><strong>{data.founded} г.</strong></div>
          <div className="data-row"><span>Стадион</span><strong>{data.stadium}</strong></div>
          <div className="data-row"><span>Вместимость</span><strong>{data.capacity}</strong></div>
        </div>
      </div>
    );
  }
}

class ClubAchievements extends React.Component {
  render() {
    const { stats } = this.props;
    return (
      <div className="card">
        <div className="card-h">Достижения</div>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <span className="stat-v">{s.value}</span>
              <span className="stat-l">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

class ClubRoster extends React.Component {
  render() {
    const { players } = this.props;
    return (
      <div className="card">
        <div className="card-h">Состав команды</div>
        <div className="data-list">
          {players.map((p, i) => (
            <div key={i} className="data-row">
              <div>
                <span style={{ fontSize: '0.7rem', marginRight: '10px' }}>#{p.no}</span>
                <strong>{p.name}</strong>
              </div>
              <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--accent)' }}>{p.pos}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// Экспортируем ClubProfile для использования в Задании 3 (Каталог)
export class ClubProfile extends React.Component {
  render() {
    const { club } = this.props;
    return (
      <div className="dashboard-grid">
        <div className="main-col">
          <ClubInfo data={club} />
          <ClubAchievements stats={club.stats} />
        </div>
        <div className="side-col">
          <ClubRoster players={club.roster} />
        </div>
      </div>
    );
  }
}

const MU_DATA = {
  name: 'Manchester United',
  fullName: 'Manchester United Football Club',
  city: 'Manchester, England',
  founded: 1878,
  stadium: 'Old Trafford',
  capacity: '74,244',
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/250px-Manchester_United_FC_crest.svg.png',
  stats: [
    { label: 'Лига', value: '20' },
    { label: 'Кубок Англии', value: '13' },
    { label: 'UCL', value: '3' },
    { label: 'ЧМ Клубов', value: '1' }
  ],
  roster: [
    { no: '8', name: 'Bruno Fernandes', pos: 'MID' },
    { no: '10', name: 'Marcus Rashford', pos: 'FWD' },
    { no: '37', name: 'Kobbie Mainoo', pos: 'MID' },
    { no: '6', name: 'Lisandro Martinez', pos: 'DEF' },
    { no: '24', name: 'Andre Onana', pos: 'GK' }
  ]
};

class Task1 extends React.Component {
  render() {
    return <ClubProfile club={MU_DATA} />;
  }
}

export default Task1;
