import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from "react-redux"
import { addCard } from "../../actions/"
import { addCardToStorage } from "../../utils/api"
import { bone, darkPuce } from "../../utils/colors"

class AddCard extends Component {

    state = {
        question: '',
        answer: ''
    }

    handleChangeQuestion = (question) => {
        this.setState({ question })
    }

    handleChangeAnswer = (answer) => {
        this.setState({ answer })
    }

    handleSubmit = () => {
        const deckName = this.props.navigation.state.params.deckName
        const { question, answer } = this.state;
        if (deckName && question !== '' && answer !== '') {
            this.props.addCard(deckName, question, answer)
            addCardToStorage(deckName, question, answer)
            this.props.navigation.goBack()
        }
    }

    render() {
        const { question, answer } = this.state
        return (
            <ScrollView>
                <TextInput
                    placeholder="Question"
                    value={question}
                    maxLength={200}
                    multiline={true}
                    numberOfLines={2}
                    maxHeigh={2}
                    autoGrow={true}
                    onChangeText={this.handleChangeQuestion} style={[styles.center, styles.textInputMultiline]} />
                <TextInput
                    placeholder="Answer"
                    value={answer}
                    maxLength={200}
                    multiline={true}
                    numberOfLines={2}
                    maxHeigh={2}
                    autoGrow={true}
                    onChangeText={this.handleChangeAnswer} style={[styles.center, styles.textInputMultiline]} />
                <TouchableOpacity onPress={this.handleSubmit}>
                    <Text style={styles.btn}>Save Card</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

function mapStateToProps() {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        addCard: (deckName, question, answer) => {
            dispatch(addCard(deckName, question, answer))
        }
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
        textAlign: 'center',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputMultiline: {
        textAlign: 'center',
        paddingTop: 7,
        paddingBottom: 7,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)
