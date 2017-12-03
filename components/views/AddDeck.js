import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { copperPenny } from '../../utils/colors'

class AddDeck extends Component {
  render() {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                What is the title of your new deck?
            </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 32,
        color: copperPenny,
    }
})

export default AddDeck
