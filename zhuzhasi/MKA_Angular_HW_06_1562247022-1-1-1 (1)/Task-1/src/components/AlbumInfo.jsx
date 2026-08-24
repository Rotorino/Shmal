function AlbumInfo({ title, artist, year, label }) {
  return (
    <div className="album-info">
      <h2>{title}</h2>
      <p><strong>Исполнитель:</strong> {artist}</p>
      <p><strong>Год выпуска:</strong> {year}</p>
      <p><strong>Издатель:</strong> {label}</p>
    </div>
  )
}

export default AlbumInfo
