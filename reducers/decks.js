import {
    ADD_CARD,
    ADD_DECK,
    ADD_DECK_DATA,
    DELETE_DECK,
    RECEIVE_DECKS,
} from '../utils/types'

export function decks(state = {}, action) {
  const {payload} = action;
  switch (action.type) {
      case ADD_CARD:
        return {
          ...state,
          [payload.deckName]: state[payload.deckName].concat(
            {question: payload.question, answer: payload.answer}
          )
        }
      case ADD_DECK:
        return {
            ...state,
            [payload]: []
        }
      case ADD_DECK_DATA:
        return {
            ...state,
            [payload.deckName]: payload.items
        }
      case DELETE_DECK:
        let temp = {...state};
        delete temp[payload];
        return temp;
      case RECEIVE_DECKS:
        return payload;
      default:
        return {...state}
  }
}
