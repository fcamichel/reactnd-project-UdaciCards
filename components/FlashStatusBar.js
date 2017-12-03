import React from 'react'
import { View, StatusBar, Text } from 'react-native'
import { Constants } from 'expo'

export default class FlashStatusBar extends React.Component {
    render() {
        let { backgroundColor } = this.props
        
        return (
        <View style={{ backgroundColor: backgroundColor, height: Constants.statusBarHeight, width: '100%' }}>
            <StatusBar translucent backgroundColor={ backgroundColor }/>
        </View>
        )
    }
} 