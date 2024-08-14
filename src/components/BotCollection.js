import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    axios.get('https://bot-battlr-backend-beryl.vercel.app/bots')
      .then(response => setBots(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Bot Collection</h2>
      <ul>
        {bots.map(bot => (
          <li key={bot.id}>
            <Link to={`/bots/${bot.id}`}>
              <img src={bot.avatar_url} alt={bot.name} width="100" />
              <p>{bot.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotCollection;
