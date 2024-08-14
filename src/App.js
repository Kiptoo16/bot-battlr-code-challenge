import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import BotSpecs from './components/BotSpecs';
import YourBotArmy from './components/YourBotArmy';

function App() {
  return (
    <Router>
      <div>
        <h1>Bot Battlr</h1>
        <Routes> {}
          <Route path="/" element={<BotCollection />} />
          <Route path="/bots/:id" element={<BotSpecs />} />
          <Route path="/army" element={<YourBotArmy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
