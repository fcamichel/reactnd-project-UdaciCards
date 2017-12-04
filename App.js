import React from 'react'
import { Provider } from 'react-redux'
import Tabs from "./components/navigation/Tabs"
import { copperPenny, white } from './utils/colors'
import store from "./store/index"

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
          <Tabs/>
      </Provider>
    );
  }
}
