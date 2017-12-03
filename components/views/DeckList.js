import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { copperPenny, bone } from '../../utils/colors'

class DeckList extends Component {
    FlatListItemSeparator = () => {
        return (
          <View
            style={ styles.separator }
          />
        );
      }

  render() {
    return (
        <View style={ styles.container }>
            <FlatList
                data={ [{key: 'React'}, {key: 'JavaScript'}] }
                ItemSeparatorComponent = { this.FlatListItemSeparator }
                renderItem={ ({ item }) => <Text style={ styles.item }>{ item.key }</Text> }
            />
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
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: copperPenny,
      },
    
})

export default DeckList;