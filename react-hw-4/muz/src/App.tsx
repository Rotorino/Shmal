import React from 'react';

interface AlbumData {
  title: string;
  artist: string;
  year: number;
  label: string;
  coverUrl: string;
  creator?: string;
}

// Дочерний компонент для обложки
const AlbumCover: React.FC<{ url: string; alt: string }> = ({ url, alt }) => {
  return <img src={url} alt={alt} className="photo" />;
};

// Дочерний компонент для информации об альбоме
const AlbumInfo: React.FC<{ 
  artist: string; 
  year: number; 
  label: string; 
  creator?: string;
}> = ({ artist, year, label, creator }) => {
  return (
    <div className="info">
      <p><strong>Исполнитель:</strong> {artist}</p>
      <p><strong>Год выпуска:</strong> {year}</p>
      <p><strong>Лейбл:</strong> {label}</p>
      {creator && <p><strong>Автор:</strong> {creator}</p>}
    </div>
  );
};

// Дочерний компонент - карточка альбома
const AlbumCard: React.FC<{ album: AlbumData }> = ({ album }) => {
  return (
    <div className="card">
      <h1>{album.title}</h1>
      <AlbumCover url={album.coverUrl} alt={`${album.title} cover`} />
      <AlbumInfo 
        artist={album.artist} 
        year={album.year} 
        label={album.label} 
        creator={album.creator}
      />
    </div>
  );
};

// Главный компонент (родительский)
function App() {
  // Данные об альбоме хранятся здесь
  const myFavoriteAlbum: AlbumData = {
    title: "Meow Meow",
    artist: "heapper · ahh",
    year: 2026,
    label: "Ahh Music",
    coverUrl: "https://i.postimg.cc/mZ3tf7ny/artworks-Pi-GMTr-Fa-Ya-Kh-QIZO-g-WMFXw-t500x500.jpg",
    creator: "Kirill Subanov"
  };

  return (
    <div className="container">
      <AlbumCard album={myFavoriteAlbum} />
    </div>
  );
}

export default App;
