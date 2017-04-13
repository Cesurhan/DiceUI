import React, { PureComponent} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import subscribeToGames from '../actions/games/subscribe'


class GameRoom extends PureComponent {
  render() {
    const { gameId } = this.props.params

    const ourGameArray = this.props.games.filter(function(game) {
      return game._id === gameId  //type = BOOL
    })
    const ourGame = ourGameArray[0]

    console.error(ourGame)

    //this.props.games = [array]

    return (
      <div className="container col-md-offset-4">
        <h2>GameId: {gameId}</h2>
        <h1>The Winning Number is: {ourGame.winningNumber}</h1>
        <RaisedButton label="Throw Dice" primary={true} />
      </div>
    )
  }
}


const mapStateToProps = ({ games }) => ({ games })
export default connect(mapStateToProps, { subscribeToGames })(GameRoom)
