import { ADD_DECK_DATA } from "../utils/types";

export const addDeckData = (deckName, items) => {
  return {
    type: ADD_DECK_DATA,
    payload: {
      deckName,
      items
    }
  }
}
