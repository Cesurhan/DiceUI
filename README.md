# Dice-ui

A react app to chat, create game rooms and play a simple dice game.
This API requires [dice-ui](https://github.com/Cesurhan/dice-api) to be working.
This project is using [shut-up-ui](https://github.com/Codaisseur/shut-up-ui) as base project.

<img width="831" alt="screen shot 2017-05-05 at 17 20 38" src="https://cloud.githubusercontent.com/assets/15831300/25752434/8fb5750e-31b8-11e7-9ec8-f7a5df4fd843.png">

## Steps

These are the steps I followed when working on this app:

1. Setting up project
2. Adding JoinGame
3. Adding player limitation
4. Displaying winning number
5. Adding throw dice
6. Announcing the winner

## Database Structure

1. User

  * name:string
  * email:string
  * password:string
  * gravtar:string

2. Message

  * text:string
  * author:string

3. Game

  * title:string
  * winningNumber:integer
  * playerIds:array
  * isWinner:boolean
  * thrownDice:integer
  * winnerName:string
  
## Running Locally

Make sure you have [NodeJS](https://nodejs.org) and [npm](https://www.npmjs.com) installed.

```bash
git clone git@github.com:Cesurhan/dice-ui.git
cd dice-ui
npm install
npm start
open http://localhost:3000
```

## Related documentation

For more information about using React and Redux, see these links:

* [React](https://facebook.github.io/react/docs/installation.html)
* [Redux](http://redux.js.org)
