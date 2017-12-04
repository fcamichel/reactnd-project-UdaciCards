import { DELETE_DECK } from "../utils/types"

export const deleteDeck = (deckName) => {
  return {
    type: DELETE_DECK,
    payload: deckName
  }
}
