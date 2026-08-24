import AlbumCover from './AlbumCover'
import AlbumInfo from './AlbumInfo'
import TrackList from './TrackList'
import './Album.css'

function Album({ title, artist, year, label, cover, tracks }) {
  return (
    <div className="album">
      <AlbumCover src={cover} alt={`${title} — ${artist}`} />
      <AlbumInfo title={title} artist={artist} year={year} label={label} />
      <TrackList tracks={tracks} />
    </div>
  )
}

export default Album
