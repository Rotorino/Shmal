function PersonalInfo({
  name, phone, email, city,
  onNameChange, onPhoneChange, onEmailChange, onCityChange,
}) {
  return (
    <div className="personal-info">
      <h2>Личная информация</h2>
      <div className="form-group">
        <label className="form-label">ФИО</label>
        <input
          className="form-input"
          type="text"
          value={name}
          onChange={e => onNameChange(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Телефон</label>
        <input
          className="form-input"
          type="text"
          value={phone}
          onChange={e => onPhoneChange(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Email</label>
        <input
          className="form-input"
          type="email"
          value={email}
          onChange={e => onEmailChange(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Город</label>
        <input
          className="form-input"
          type="text"
          value={city}
          onChange={e => onCityChange(e.target.value)}
        />
      </div>
    </div>
  )
}

export default PersonalInfo
