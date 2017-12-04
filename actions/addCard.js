import { ADD_CARD } from "../utils/types"

export const addCard = (deckName, question, answer) => {
  return {
    type: ADD_CARD,
    payload: {
      deckName,
      question,
      answer
    }
  }
}
