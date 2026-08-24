import { useState } from 'react'
import Photo from './components/Photo'
import PersonalInfo from './components/PersonalInfo'
import Experience from './components/Experience'
import Skills from './components/Skills'
import './App.css'
import './components/Profile.css'
import mePhoto from './assets/me.webp'

const defaultData = {
  name: 'Горбатков Никита Романович',
  phone: '+79528170923',
  email: 'arrivalofmiseryofficial@gmail.com',
  city: 'г. Краснодар',
}

function App() {
  const [name, setName] = useState(defaultData.name)
  const [phone, setPhone] = useState(defaultData.phone)
  const [email, setEmail] = useState(defaultData.email)
  const [city, setCity] = useState(defaultData.city)

  const handleReset = () => {
    setName(defaultData.name)
    setPhone(defaultData.phone)
    setEmail(defaultData.email)
    setCity(defaultData.city)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Персональная страница</h1>
      </header>
      <div className="container">
        <div className="profile-card">
          <Photo
            src={mePhoto}
            alt="Фото"
          />
          <div className="profile-info">
            <PersonalInfo
              name={name}
              phone={phone}
              email={email}
              city={city}
              onNameChange={setName}
              onPhoneChange={setPhone}
              onEmailChange={setEmail}
              onCityChange={setCity}
            />
            <Experience experience="Великий программист HTML 20 лет стажа в компании WikiLigs" />
            <Skills skills={['Устойчивость']} />
            <button className="reset-btn" onClick={handleReset}>
              Сбросить
            </button>
          </div>
        </div>
      </div>
      <footer className="footer">
        Горбатков Никита Романович &copy; 2025
      </footer>
    </div>
  )
}

export default App
