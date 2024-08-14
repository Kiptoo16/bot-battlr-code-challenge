# BOT BATTLR
# WEEK 2 CODE CHALLENGE
# Vercel Link 

Bot Battlr is an engaging web application where users can view and manage a collection of bots, add them to their army, and navigate through different bot details. Built using React, this app leverages react-router-dom for navigation and axios for data fetching, providing a dynamic and interactive experience.

Features
Bot Collection: View a list of available bots.
Bot Details: Click on a bot to see detailed specifications including health, damage, armor, and more.
Add to Army: Add selected bots to your army and manage your roster.
Navigation: Smooth navigation between different pages, including bot details and army overview.
Technologies
React: For building the user interface.
react-router-dom: For routing and navigation.
axios: For making HTTP requests.
localStorage: For persisting the bot army data.
Installation
To get started with Bot Battlr, follow these steps:

Clone the Repository

bash
Copy code
git clone [https://github.com/Kiptoo16/bot-battlr-code-challenge.git]
cd bot-battlr
Install Dependencies

Make sure you have node and npm installed. Then, run:

bash
Copy code
npm install
Run the Application

Start the development server:

bash
Copy code
npm start
The application will be available at http://localhost:3000.

Configuration
API Endpoint
The application expects a backend server running at http://localhost:3000 that provides bot data at the following endpoint:

GET /bots: List all bots.
GET /bots/:id: Get details for a specific bot.
Local Storage
The application uses local storage to save and retrieve the bot army. The data is stored under the key botArmy.

Component Overview
BotSpecs
Displays detailed information about a specific bot. Users can add the bot to their army from this page.

Dependencies: axios, react-router-dom
State: bot, army
Effects: Fetch bot details and initialize the army from local storage.
Functions:
addToArmy(): Adds the bot to the army and saves it to local storage.
Navigation buttons to move between bot details and the bot collection.
App
The main entry point of the application which sets up the routing and renders different pages.

Routes:
/bots/:id: Displays the BotSpecs component for a specific bot.
/army: Displays the army overview page (implement as needed).
/: Displays the bot collection page (implement as needed).
