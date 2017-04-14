import { CALL_API, PATCH } from '../../middleware/api'

export default (gameId) => {
  console.error("ACTION")
  return {
    [CALL_API]: {
      service: 'games',
      method: PATCH,
      authenticate: true,
      params: {
        // joinGame: true,
        startGame: true,
       },
      id: gameId,
    }
  }
}
