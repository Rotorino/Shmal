import React from 'react';
import { ClubProfile } from './Task1';

class Task3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedClub: null,
      clubs: [
        {
          name: 'Manchester United',
          fullName: 'Manchester United Football Club',
          city: 'Manchester, England',
          founded: 1878,
          stadium: 'Old Trafford',
          capacity: '74,244',
          logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/250px-Manchester_United_FC_crest.svg.png',
          stats: [{label: 'Лига', value: '20'}, {label: 'UCL', value: '3'}, {label: 'FA Cup', value: '13'}, {label: 'ЧМ', value: '1'}],
          roster: [
            { no: '8', name: 'Bruno Fernandes', pos: 'MID' },
            { no: '10', name: 'Marcus Rashford', pos: 'FWD' },
            { no: '6', name: 'Lisandro Martinez', pos: 'DEF' }
          ]
        },
        {
          name: 'Paris Saint-Germain',
          fullName: 'Paris Saint-Germain Football Club',
          city: 'Paris, France',
          founded: 1970,
          stadium: 'Parc des Princes',
          capacity: '47,929',
          logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/250px-Paris_Saint-Germain_F.C..svg.png',
          stats: [{label: 'Ligue 1', value: '12'}, {label: 'UCL', value: '2'}, {label: 'Coupe', value: '16'}, {label: 'Super', value: '1'}],
          roster: [
            { no: '10', name: 'Ousmane Dembélé', pos: 'FWD' },
            { no: '5', name: 'Marquinhos', pos: 'DEF' },
            { no: '17', name: 'Vitinha', pos: 'MID' }
          ]
        },
        {
          name: 'Liverpool FC',
          fullName: 'Liverpool Football Club',
          city: 'Liverpool, England',
          founded: 1892,
          stadium: 'Anfield',
          capacity: '61,276',
          logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/250px-Liverpool_FC.svg.png',
          stats: [{label: 'Лига', value: '19'}, {label: 'UCL', value: '6'}, {label: 'FA Cup', value: '8'}, {label: 'League Cup', value: '10'}],
          roster: [
            { no: '11', name: 'Mohamed Salah', pos: 'FWD' },
            { no: '4', name: 'Virgil van Dijk', pos: 'DEF' },
            { no: '8', name: 'Dominik Szoboszlai', pos: 'MID' }
          ]
        },
        {
          name: 'Arsenal FC',
          fullName: 'The Arsenal Football Club',
          city: 'London, England',
          founded: 1886,
          stadium: 'Emirates Stadium',
          capacity: '60,704',
          logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/250px-Arsenal_FC.svg.png',
          stats: [{label: 'Лига', value: '14'}, {label: 'FA Cup', value: '14'}, {label: 'Shield', value: '17'}, {label: 'UCL', value: '0'}],
          roster: [
            { no: '8', name: 'Martin Odegaard', pos: 'MID' },
            { no: '7', name: 'Bukayo Saka', pos: 'FWD' },
            { no: '2', name: 'William Saliba', pos: 'DEF' }
          ]
        }
      ]
    };
  }

  render() {
    const { selectedClub, clubs } = this.state;

    if (selectedClub) {
      return (
        <div>
          <button className="back-btn" onClick={() => this.setState({ selectedClub: null })}>
            ← Назад к каталогу
          </button>
          <ClubProfile club={selectedClub} />
        </div>
      );
    }

    return (
      <div>
        <div className="card-h" style={{ marginBottom: '2rem' }}>Каталог клубов</div>
        <div className="catalog-grid">
          {clubs.map((c, i) => (
            <div key={i} className="club-tile" onClick={() => this.setState({ selectedClub: c })}>
              <div className="tile-head">
                <img src={c.logo} className="tile-logo" alt="" />
                <div>
                  <div className="tile-title">{c.name}</div>
                  <div className="tile-city">{c.city}</div>
                </div>
              </div>
              <div className="data-list">
                <div className="data-row"><span>Основан</span><strong>{c.founded} г.</strong></div>
                <div className="data-row"><span>Стадион</span><strong>{c.stadium}</strong></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Task3;
