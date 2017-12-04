import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { bone, copperPenny, darkPuce } from '../../utils/colors'
import { connect } from "react-redux"
import { addDeck } from "../../actions/"
import { updateDeck } from "../../utils/api"

class AddDeck extends Component {

    state = {
        deckName: 'Please type in here'
    }

    toDeckList = (deckName) => {
        this.props.navigation.dispatch(NavigationActions.navigate({
            routeName: 'DeckDetail',
            params: { deckName }
        }))
    }

    handleInput = (input) => {
        this.setState({
            deckName: input
        })
    }

    handleSubmit = () => {
        const { deckName } = this.state
        if (deckName && deckName !== '') {
            this.setState({
                deckName: null
            });
            this.props.addDeck(deckName);
            updateDeck([], deckName);
            this.toDeckList(deckName);
        }
    }

    render() {
        const { deckName } = this.state
        return (
            <View style={[styles.container, styles.center]}>
                <Text style={styles.title}>
                    What is the title of your new deck?
                </Text>
                <TextInput
                    value={deckName}
                    maxLength={20}
                    onSubmitEditing={this.handleSubmit}
                    onChangeText={this.handleInput}
                    style={[styles.center, styles.inputField]}
                    autoFocus={true} />
                <TouchableOpacity onPress={this.handleSubmit}>
                    <Text style={styles.btn}>Save new Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps() {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        addDeck: (deckName) => {
            dispatch(addDeck(deckName))
        }
    }
}

const styles = StyleSheet.create({
    btn: {
        color: darkPuce,
        backgroundColor: bone,
        margin: 20,
        padding: 15,
        height: 50,
        minWidth: 200,
        textAlign: 'center'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        margin: 10,
    },
    title: {
        fontSize: 32,
        color: copperPenny,
    },
    inputField: {
        textAlign: 'center',
        height: 30,
        width: 200,
        color: darkPuce,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck)
