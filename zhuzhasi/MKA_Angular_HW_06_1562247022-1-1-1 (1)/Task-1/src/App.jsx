import Album from './components/Album'

const albumData = {
  title: '$O$ (SOS)',
  artist: 'Die Antwoord',
  year: 2010,
  label: 'Indie / Cherrytree / Interscope Records',
  cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Die_antwoord_SOS_cover.png/250px-Die_antwoord_SOS_cover.png',
  tracks: [
    'Whatever Man',
    'Wat Kyk Jy?',
    'Enter the Ninja',
    'Wat Pomp',
    'Wie Maak Die Jol Vol',
    'Rich Bitch',
    "I Don't Need You",
    'Very Fancy',
    'Dagga Puff',
    'My Best Friend',
    'Liewe Maatjies',
    '$copie',
    'Beat Boy',
    'Super Evil',
    'Doos Dronk',
    'SOS',
  ],
}

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Любимый музыкальный альбом</h1>
      </header>
      <div className="container">
        <Album {...albumData} />
      </div>
      <footer className="footer">
        Горбатков Никита Романович &copy; 2025
      </footer>
    </div>
  )
}

export default App
