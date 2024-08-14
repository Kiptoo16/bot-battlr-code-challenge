import React, { useState, useEffect } from 'react';
import axios from 'axios';

function YourBotArmy() {
  const [army, setArmy] = useState([]);

  useEffect(() => {
    const savedArmy = JSON.parse(localStorage.getItem('botArmy')) || [];
    setArmy(savedArmy);
  }, []);

  const releaseBot = (id) => {
    const updatedArmy = army.filter(bot => bot.id !== id);
    setArmy(updatedArmy);
    localStorage.setItem('botArmy', JSON.stringify(updatedArmy));
  };

  const dischargeBot = (id) => {
    axios.delete(`https://bot-battlr-backend-beryl.vercel.app/bots/${id}`)
      .then(() => releaseBot(id))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {army.map(bot => (
          <li key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} width="100" />
            <p>{bot.name}</p>
            <button onClick={() => releaseBot(bot.id)}>Release</button>
            <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourBotArmy;
