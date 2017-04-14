import React, { PureComponent} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import subscribeToGames from '../actions/games/subscribe'
import throwDice from '../actions/games/throwDice'


class GameRoom extends PureComponent {

  constructor() {
    super()

    this.state = {
      diceHolder: ''
    }
  }

  throwDiceAnime(gameId) {
    this.setState({
      diceHolder:'http://bestanimations.com/Games/Dice/rolling-dice-gif-3.gif'
    })
    setTimeout(() => {
      this.setState({diceHolder: ''})
      this.props.throwDice(gameId)
    },500)
  }

  checkIfThereIsAWinner(winnerName){
    let announcement = "The winner is: "
    if (winnerName != null) {
      return announcement + winnerName
    }
  }

  buttonDisabler(isWinner) {
    if (isWinner) {
      return 'disabled'
    }
  }

  raisedButtonLabel(isWinner){
    if (isWinner) {
      return 'Game Over'
    } else {
      return 'Throw Dice'
    }
  }

  render() {
    const { gameId } = this.props.params

    const ourGameArray = this.props.games.filter(function(game) {
      return game._id === gameId  //type = BOOL
    })
    const ourGame = ourGameArray[0]

    // console.error(ourGame)
    // this.props.games = [array]

    const { winningNumber } = ourGame
    const { thrownDice } = ourGame
    const { winnerName } = ourGame
    const { isWinner} = ourGame

    return (
      <div className="container text-center">
        <h1>The Winning Number is: {winningNumber}</h1>
        <h2>Thrown Dice: {thrownDice}</h2>
          <RaisedButton id = "throw-dice-button" label = {this.raisedButtonLabel(isWinner)} disabled={this.buttonDisabler(isWinner)} secondary={true} onTouchTap = {() => {this.throwDiceAnime(gameId)} }/>
          <div id="display-winner">
            <h1>{this.checkIfThereIsAWinner(winnerName)}</h1>
          </div>
          <div>
          <img src={ this.state.diceHolder } height="100em" />
          </div>
      </div>
    )
  }
}


const mapStateToProps = ({ games }) => ({ games })
export default connect(mapStateToProps, { subscribeToGames, throwDice })(GameRoom)
