import React from 'react'
import { StackNavigator } from "react-navigation"
import DeckDetail from "../views/DeckDetail"
import DeckList from "../views/DeckList"
import { copperPenny, nyanza, paleSilver } from '../../utils/colors'

const DeckNavigation = StackNavigator({
    DeckDetail: {
        screen: DeckDetail,
        navigationOptions: ({ navigation }) => ({
            title: `Deck \'${navigation.state.params.deckName}\'`,
            headerStyle: {
                backgroundColor: copperPenny
            },
            headerTitleStyle: {
                color: nyanza
            },
            headerBackTitleStyle: {
                color: paleSilver
            },
            headerTintColor: paleSilver
        })
    },
    Decks: {
        screen: DeckList,
        navigationOptions: ({ navigation }) => ({
            title: 'Decks',
            headerStyle: {
                backgroundColor: copperPenny
            },
            headerTitleStyle: {
                color: nyanza
            }
        })
    },
}, {
    initialRouteName: 'Decks'
})

export default DeckNavigation
