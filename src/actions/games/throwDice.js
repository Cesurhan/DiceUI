import { CALL_API, UPDATE } from '../../middleware/api'

export default (gameId) => {
  return {
    [CALL_API]: {
      service: 'game',
      method: UPDATE,
      // type: 'GAME_UPDATED',
      authenticate: true,
      params: { diceThronw: true },
      id: gameId,
    }
  }
}
