import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import FlashStatusBar from './components/FlashStatusBar'
import Tabs from "./components/navigation/Tabs"
import { copperPenny, white } from './utils/colors'
import store from "./store/index"

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <View style={ styles.container }>
          <FlashStatusBar backgroundColor={ copperPenny } />
          <Tabs/>
        </View>
      </Provider>
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
