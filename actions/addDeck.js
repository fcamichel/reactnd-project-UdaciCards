import { ADD_DECK } from "../utils/types";

export const addDeck = (deckName) => {
  return {
    type: ADD_DECK,
    payload: deckName
  }
}
