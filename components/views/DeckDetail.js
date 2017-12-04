import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from "react-redux"
import { deleteDeck } from "../../actions/";
import { deleteDeckFromStorage } from "../../utils/api";
import { bone, copperPenny, darkPuce, paleSilver } from '../../utils/colors';

class DeckDetail extends Component {
    subNavigate = (deckName, routeName) => {
        this.props.navigation.dispatch(NavigationActions.navigate({
            routeName: routeName,
            params: { deckName }
        }))
    };

    deleteDeck = (deckName) => {
        this.props.deleteDeck(deckName);
        this.props.navigation.goBack();
        deleteDeckFromStorage(deckName);
    };

    render() {
        const deckName = this.props.navigation.state.params.deckName
        const deck = this.props.decks[deckName];
        if (!deck) {
            return null;
        }
        return (<View style={styles.container}>
            <Text style={styles.text}>{deck.length} cards</Text>
            <TouchableOpacity onPress={() => this.deleteDeck(deckName)}>
                <Text style={styles.btnDel}>Delete Deck</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.subNavigate(deckName, 'AddCard')}>
                <Text style={styles.btn}>Add Card</Text>
            </TouchableOpacity>
            {deck.length > 0 && <TouchableOpacity onPress={() => this.subNavigate(deckName, 'Quiz')}><Text>Start Quiz</Text></TouchableOpacity>}
        </View>)
    }
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: bone,
        color: darkPuce,
        margin: 20,
        padding: 15,
        height: 50,
        minWidth: 200,
        textAlign: 'center'
    },
    btnDel: {
        backgroundColor: copperPenny,
        color: paleSilver,
        margin: 20,
        padding: 15,
        height: 50,
        minWidth: 200,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        margin: 10,
    },
    text: {
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 15
      }
})

function mapStateToProps({ decks }) {
    return {
        decks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteDeck: (deckName) => {
            dispatch(deleteDeck(deckName))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail)
