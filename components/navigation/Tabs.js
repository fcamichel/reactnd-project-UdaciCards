import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator } from 'react-navigation'
import DeckList from "../views/DeckList";
import AddDeck from "../views/AddDeck";
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { bone, copperPenny, darkPuce, paleSilver, white, black } from '../../utils/colors'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => <FontAwesome name='list' size={30} color={ tintColor } />
      },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ tintColor }) => <FontAwesome name='plus' size={30} color={ tintColor } />
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

export default Tabs;