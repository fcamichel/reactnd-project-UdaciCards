import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlashStatusBar from './components/FlashStatusBar'
import Tabs from "./components/navigation/Tabs"
import { copperPenny, white } from './utils/colors'

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <FlashStatusBar backgroundColor={ copperPenny } />
        <Tabs/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
