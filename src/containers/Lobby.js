import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import subscribeToGames from '../actions/games/subscribe'
import createGame from '../actions/games/create'
import joinGame from '../actions/games/join'
import './Lobby.sass'
import GAME_PATH from '../routes'
import { history } from '../store'



class Lobby extends PureComponent {
  componentWillMount() {
    this.props.subscribeToGames()
  }

  renderCreateGameButton() {
    return <RaisedButton
      onTouchTap={this.props.createGame}
      label="Create Game"
      primary={true} />
  }

  renderJoinGameButton(game) {
    return <RaisedButton
    label = "Join"
    secondary = {true}
    onTouchTap = { () => {
      game.playerIds.length < 2 &&
      this.props.joinGame(game._id)
      history.push('/games/' + game._id)
    }} />
  }

  render() {
    return (
      <div className="games lobby">
        <h1>Lobby</h1>

        { this.props.games.length === 0 ?
          <div className="no-results">
            <h2>No Games yet! Feel free to create one!</h2>
            { this.renderCreateGameButton() }
          </div> :
          <div className="games list">
            <div className="actions">
              { this.renderCreateGameButton() }
            </div>

            { this.props.games.map((game) => {
              return (
                <Paper
                  zDepth={1}
                  style={{ padding: '12px 24px' }}>
                  <h4>{ game.title } {this.renderJoinGameButton(game)}</h4>
                </Paper>
              )
            })}
          </div>
        }
      </div>
    )
  }
}


/// (ReduxStore) => (this.props)
const mapStateToProps = ({ games }) => ({ games })
export default connect(mapStateToProps, { subscribeToGames, createGame, joinGame })(Lobby)
