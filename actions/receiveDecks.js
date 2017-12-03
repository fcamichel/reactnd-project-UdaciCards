import { RECEIVE_DECKS } from '../utils/types'

export const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    payload: decks
  }
}
