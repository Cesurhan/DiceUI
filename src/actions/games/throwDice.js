import { CALL_API, PATCH } from '../../middleware/api'

export default (gameId) => {
  return {
    [CALL_API]: {
      service: 'games',
      method: PATCH,
      authenticate: true,
      params: { startGame: true },
      id: gameId,
    }
  }
}
