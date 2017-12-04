import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'FlashCards:DeckStorage'

export function fetchDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((decks) => JSON.parse(decks))
}

export function updateDeck(deck, key) {
  AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
}

export function deleteDeckFromStorage(key) {
  let almostComplete;
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((decks) => JSON.parse(decks))
    .then((decks) => {
      almostComplete = {...decks};
      delete almostComplete[key];
      return AsyncStorage.removeItem(DECK_STORAGE_KEY)
    })
    .then(() => {
        AsyncStorage.mergeItem(
          DECK_STORAGE_KEY,
          JSON.stringify(almostComplete))
      }
    )
}

export function addCardToStorage(key, question, answer) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((decks) => JSON.parse(decks))
    .then((decks) => {
      return AsyncStorage.mergeItem(DECK_STORAGE_KEY,
        JSON.stringify(
          {[key]: decks[key].concat({question, answer})}
        )
      )
    })
}
