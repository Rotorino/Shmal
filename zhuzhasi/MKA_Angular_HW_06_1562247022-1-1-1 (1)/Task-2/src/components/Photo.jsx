function Photo({ src, alt }) {
  return (
    <div className="profile-photo">
      <img src={src} alt={alt} />
    </div>
  )
}

export default Photo
