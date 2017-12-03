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
