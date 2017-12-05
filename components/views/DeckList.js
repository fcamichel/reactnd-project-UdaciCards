import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, FlatList } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from "react-redux"
import { copperPenny, bone } from '../../utils/colors'
import { fetchDecks } from "../../utils/api"
import { receiveDecks } from "../../actions/"
import { setLocalNotification } from "../../utils/helpers"
import { FontAwesome } from '@expo/vector-icons'

class DeckList extends Component {
    state = {
        ready: false
    }

    componentDidMount() {
        const { dispatch } = this.props

        fetchDecks()
            .then((decks) => {
                dispatch(receiveDecks(decks));
            })
            .then(() => {
                this.setState(() => ({ ready: true }))
            })
            .then(() => {
                setLocalNotification();
            })
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={styles.separator}
            />
        );
    }

    toDeck = (deckName) => {
        this.props.navigation.dispatch(NavigationActions.navigate({
            routeName: 'DeckDetail',
            params: { deckName }
        }))
    }

    render() {
        const { decks } = this.props
        const data = Object.keys(decks ? decks : {}).map((deckKey) => {
            var rObj = {}
            rObj['key'] = deckKey
            return rObj
        })
        return (
            <View style={styles.container}>
                {this.state.ready
                    ? <ScrollView>
                        {decks && data.length > 0
                            ? <FlatList
                                data={data}
                                ItemSeparatorComponent={this.FlatListItemSeparator}
                                renderItem={({ item }) => <Text onPress={() => { this.toDeck(item.key) }} style={styles.item}>{item.key} <FontAwesome name='caret-right' size={18} color={copperPenny} /> {decks[item.key].length}</Text>}
                            />
                            :
                            <Text style={styles.noDecks}>No Decks created yet</Text>
                        }
                    </ScrollView>
                    : <Text>Loading Decks ...</Text>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: bone,
    },
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    noDecks: {
        margin: 20,
        color: copperPenny,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: copperPenny,
    },

})

function mapStateToProps({ decks }) {
    return {
        decks: decks
    }
}

export default connect(mapStateToProps)(DeckList)
