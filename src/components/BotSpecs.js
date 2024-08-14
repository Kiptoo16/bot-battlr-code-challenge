import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BotSpecs() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [bot, setBot] = useState(null);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    axios.get(`https://bot-battlr-backend-beryl.vercel.app/bots/${id}`)
      .then(response => setBot(response.data))
      .catch(error => console.error(error));
  }, [id]);

  useEffect(() => {
    const savedArmy = JSON.parse(localStorage.getItem('botArmy')) || [];
    setArmy(savedArmy);
  }, []);

  const addToArmy = () => {
    if (!bot || army.find(b => b.id === bot.id)) return;
    
    const updatedArmy = [...army, bot];
    setArmy(updatedArmy);
    localStorage.setItem('botArmy', JSON.stringify(updatedArmy));
    navigate('/army');  
  };

  if (!bot) return <div>Loading...</div>;

  return (
    <div>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} width="300" />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={addToArmy}>Add to Army</button>
      <button onClick={() => navigate('/')}>Back to Collection</button>  {/* Updated navigation method */}
    </div>
  );
}

export default BotSpecs;
