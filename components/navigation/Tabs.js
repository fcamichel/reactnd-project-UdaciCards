import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator } from 'react-navigation'
import DeckNavigation from "./DeckNavigation"
import AddDeck from "../views/AddDeck"
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { bone, copperPenny, darkPuce, paleSilver, white, black } from '../../utils/colors'

const Tabs = TabNavigator({
    DeckOverview: {
        screen: DeckNavigation,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor }) => <FontAwesome name='list' size={30} color={tintColor} />
        },
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck',
            tabBarIcon: ({ tintColor }) => <FontAwesome name='plus' size={30} color={tintColor} />
        },
    }
}, {
        navigationOptions: {
            header: null
        },
        tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? paleSilver : white,
            inactiveTintColor: Platform.OS === 'ios' ? darkPuce : white,
            activeBackgroundColor: Platform.OS === 'ios' ? copperPenny : black,
            inactiveBackgroundColor: Platform.OS === 'ios' ? bone : black,
        },
        animationEnabled: true
    });

export default Tabs
