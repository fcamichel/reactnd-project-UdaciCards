import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from "react-redux"
import { bone, darkPuce } from '../../utils/colors'

function ResultScreen({ onRestart, onBack, correct, total }) {
    const incorrectCounter = total - correct;
    return (
        <View>
            <Text style={styles.text}>Stats</Text>
            <Text style={styles.text}>
                Correct: {correct} ({Math.round(correct / total * 100, 1)}%)
            </Text>
            <Text style={styles.text}>
                Incorrect: {incorrectCounter} ({Math.round(incorrectCounter / total * 100, 1)}%)
            </Text>
            <TouchableOpacity onPress={onRestart}>
                <Text style={styles.btn}>Restart</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onBack}>
                <Text style={styles.btn}>Back to deck</Text>
            </TouchableOpacity>
        </View>
    )
}

class Quiz extends Component {
    state = {
        showAnswer: false,
        questionIndex: 0,
        correctCounter: 0,
        deck: [],
        rescheduledNotification: false
    }

    componentDidMount() {
        const deckName = this.props.navigation.state.params.deckName;
        const deck = this.props.decks[deckName];
        if (deck && deck.length > 0) {
            this.setState({ deck })
        }
    }

    handleFlip = () => {
        this.setState((state) => {
            return {
                showAnswer: !state.showAnswer
            }
        })
    }

    handleResult = (correct) => {
        this.setState((state) => {
            return {
                questionIndex: state.questionIndex + 1,
                correctCounter: correct ? state.correctCounter + 1 : state.correctCounter,
                showAnswer: false
            }
        })
        if (this.state.questionIndex + 1 === this.state.deck.length) {
            //clearLocationNotification()
            //    .then(setLocalNotification)
        }
    }

    handleRestart = () => {
        this.setState({
            questionIndex: 0,
            showAnswer: false,
            correctCounter: 0
        })
    }

    handleBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        const { deck, showAnswer, questionIndex, correctCounter } = this.state

        if (deck.length === 0) {
            return null;
        }

        if (questionIndex >= deck.length) {
            return (<ResultScreen
                onRestart={this.handleRestart}
                onBack={this.handleBack}
                total={deck.length}
                correct={correctCounter}
            />)
        }

        const { question, answer } = deck[questionIndex];
        return (<View>
            <View>
                <Text style={[styles.text, styles.progress]}>{questionIndex + 1} / {deck.length}</Text>
                <Text style={styles.text}>{showAnswer ? answer : question}</Text>
                <TouchableOpacity onPress={this.handleFlip}>
                    <Text style={styles.btn}>Show {showAnswer ? 'Question' : 'Answer'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => this.handleResult(false)}>
                    <Text style={styles.btnWrong}>Incorrect</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handleResult(true)}>
                    <Text style={styles.btnCorrect}>Correct</Text>
                </TouchableOpacity>
            </View>
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
        textAlign: 'center',
    },
    btnCorrect: {
        color: 'white',
        backgroundColor: 'green',
        margin: 7,
        padding: 3,
        height: 35,
        minWidth: 100,
        borderRadius: 4,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    btnWrong: {
        color: 'white',
        backgroundColor: 'red',
        margin: 7,
        padding: 3,
        height: 35,
        minWidth: 100,
        borderRadius: 4,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        flexGrow: 1,
        alignSelf: 'center',
        justifyContent: 'space-between',
        padding: 20,
        margin: 20,
    },
    text: {
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 15,
      },
    progress: {
        textAlign: 'right',
        marginRight: 20,
    },
})

function mapStateToProps({ decks }) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Quiz)
