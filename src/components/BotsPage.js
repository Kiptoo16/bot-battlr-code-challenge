import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function BotsPage() {
  
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  
  async function fetchData() {
    try {
      const response = await fetch("https://bot-battlr-backend-beryl.vercel.app/bots");
      const data = await response.json();
      setBots(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  
  function enlistBot(bot) {
    if (!bot.isInArmy) {
      const updatedBots = bots.map((currentBot) =>
        currentBot.id === bot.id ? { ...currentBot, isInArmy: true } : currentBot
      );
      setBots(updatedBots);
      setYourBotArmy((prevArmy) => [...prevArmy, bot]);
    }
  }

  
  function removeBot(bot) {
    setYourBotArmy((prevArmy) =>
      prevArmy.filter((b) => b.id !== bot.id)
    );
    setBots((prevBots) =>
      prevBots.map((b) =>
        b.id === bot.id ? { ...b, army: false } : { ...b }
      )
    );
  }

  
  async function deleteBot(bot) {
    try {
      const updatedYourBotArmy = yourBotArmy.filter((b) => b.id !== bot.id);
      const updatedBots = bots.filter((b) => b.id !== bot.id);
      setYourBotArmy(updatedYourBotArmy);
      setBots(updatedBots);
      await fetch(`https://bot-battlr-backend-beryl.vercel.app/bots/${bot.id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error deleting bot:", error);
    }
  }

  
  return (
    <div>
      <YourBotArmy
        bots={yourBotArmy}
        removeBot={removeBot}
        deleteBot={deleteBot}
      />
      <BotCollection
        bots={bots}
        enlistBot={enlistBot}
        deleteBot={deleteBot}
      />
    </div>
  );
}

export default BotsPage;