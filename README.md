# **Who Knows?**

Who Knows? is an interactive quiz game based on questions from Open Trivia Database.

<p float="left">
  <img src="./static/assets/readme-login.png?raw=true" alt="Login" width=200px>
  <img src="./static/assets/readme-newGame.png?raw=true" alt="New Game" width=200px>
  <img src="./static/assets/readme-trivia.png?raw=true" alt="Trivia" width=200px>
  <img src="./static/assets/readme-gameOver.png?raw=true" alt="Game Over" width=200px>
</p>

## Summary

Got time to kill? Want to impress your friends with your trivia knowledge? Who Knows? is the app for you - Simply select your difficulty level, trivia topics and question type, and test your knowledge on the go!

## Technologies used

**Front End**

- React
- Redux
- SCSS
- Handlebars

**Back End**

- Node.js
- Express
- Postgres
- bcrypt

**Unit Testing**

- Jest

**Build**

- webpack

## Installation

- Fork and clone this repo.
- Run `npm install` to install dependencies.
- Create a `.env` file to store your database credentials.
- Create a local database using the supplied queries in [database.sql](database.sql).
- Run `npm start` to start the Node server with Nodemon.
- Run `npm run dev` to create a development build with webpack.

- This app was built with mobile-use in mind, it is advised that browser dev tools are used to replicate a mobile browser window.

**Tests**

- Run `npm test` to execute the test suite.

## Features

- Login: Users can create a new account or login with existing accounts. All passwords are hashed and user details are stored in the database.
- New Game options: Select difficulty (easy, medium, hard), question type (multiple, true/false, both) and question category
- Lives counter: User starts with 3 lives. Wrong answers cost 1 life, 10 consecutive correct answers push the difficulty to one level up and add one life
- Scoring:
  - Easy level true/false questions worth 50 points, multiple choice worth 100 points
  - Medium level true/false questions worth 100 points, multiple choice worth 200 points
  - Hard level true/false questions worth 150 points, multiple choice worth 300 points
- GIFs: Each response will be followed by a relevant GIF
- Scoreboard: When the game is over, high scores will be saved in the database

## Questions / Comments?

- Let us know by opening an issue on GitHub!
