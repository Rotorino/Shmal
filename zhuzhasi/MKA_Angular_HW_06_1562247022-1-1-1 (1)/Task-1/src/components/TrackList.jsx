function TrackList({ tracks }) {
  return (
    <div className="track-list">
      <h3>Треки</h3>
      <ol>
        {tracks.map((track, index) => (
          <li key={index}>{track}</li>
        ))}
      </ol>
    </div>
  )
}

export default TrackList
