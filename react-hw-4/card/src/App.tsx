import { useState, type ChangeEvent } from 'react'
import './App.css'

interface UserData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  experience: string;
  skills: string;
  photo: string;
}

const initialData: UserData = {
  fullName: "Никитов Никита Никитович",
  phone: "+79528170923",
  email: "arrivalofmiseryofficial@gmail.com",
  city: " Краснодар",
  experience: "67 лет в веб-разработке (Dota 2, CS 2, Brawl Stars).",
  skills: "CSS, HTML, Shelly, Git, Pudge",
  photo: "https://i.postimg.cc/3N9tPdp6/OIP-3428017262.jpg"
};

interface UserCardProps {
  data: UserData;
  onUpdate: (field: keyof UserData, value: string) => void;
  onReset: () => void;
}

const UserCard = ({ data, onUpdate, onReset }: UserCardProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onUpdate(name as keyof UserData, value);
  };

  return (
    <div className="card">
      <h1>Персональная страница</h1>
      
      <img src={data.photo} alt={data.fullName} className="photo" />
      
      <div className="info">
        <label>
          <strong>ФИО:</strong>
          <input 
            type="text" 
            name="fullName" 
            value={data.fullName} 
            onChange={handleChange} 
          />
        </label>

        <label>
          <strong>Телефон:</strong>
          <input 
            type="text" 
            name="phone" 
            value={data.phone} 
            onChange={handleChange} 
          />
        </label>

        <label>
          <strong>Email:</strong>
          <input 
            type="text" 
            name="email" 
            value={data.email} 
            onChange={handleChange} 
          />
        </label>

        <label>
          <strong>Город:</strong>
          <input 
            type="text" 
            name="city" 
            value={data.city} 
            onChange={handleChange} 
          />
        </label>

        <p>
          <strong>Опыт работы:</strong> {data.experience}
        </p>

        <p>
          <strong>Навыки:</strong> {data.skills}
        </p>
      </div>

      <button className="reset-btn" onClick={onReset}>
        Сбросить
      </button>
    </div>
  );
};

function App() {
  const [userData, setUserData] = useState<UserData>({ ...initialData });

  const handleUpdate = (field: keyof UserData, value: string) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleReset = () => {
    setUserData({ ...initialData });
  };

  return (
    <div className="container">
      <UserCard 
        data={userData} 
        onUpdate={handleUpdate} 
        onReset={handleReset} 
      />
    </div>
  )
}

export default App
