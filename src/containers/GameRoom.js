import React, { PureComponent} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import subscribeToGames from '../actions/games/subscribe'
import throwDice from '../actions/games/throwDice'


class GameRoom extends PureComponent {
  render() {
    const { gameId } = this.props.params

    const ourGameArray = this.props.games.filter(function(game) {
      return game._id === gameId  //type = BOOL
    })
    const ourGame = ourGameArray[0]

    // console.error(ourGame)
    //this.props.games = [array]

    const { winningNumber } = ourGame
    const { thrownDice } = ourGame

    return (
      <div className="container col-md-offset-4">
        <h1>The Winning Number is: {winningNumber}</h1>
        <h2>Thrown Dice: {thrownDice}</h2>
        <button onClick={() => {
          this.props.throwDice(gameId)}}>Throw Dice</button>
      </div>
    )
  }
}


const mapStateToProps = ({ games }) => ({ games })
export default connect(mapStateToProps, { subscribeToGames, throwDice })(GameRoom)
