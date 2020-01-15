import React, { Component } from 'react'
import { Alert, Text, View } from 'react-native'

import styles from './MainScreen.styles'
import GlobalStyles from '../../styles/GlobalStyles';

import TextButton from '../../components/TextButton'

export default class MainScreen extends Component {
    state = {
        pressed: 0
    }

    handlePress = () => {
        const pressed = this.state.pressed + 1
        this.setState({ pressed })
        // Alert.alert('PRESSED')

    }

    render() {

        const { buttonText, container, textBold, textLight } = styles

        return <View
            style={GlobalStyles.appContainer}
            accessible={false}
        >
            <View style={container}>
                <TextButton
                    title="Press me"
                    buttonColor={buttonText.color}
                    buttonHeight={buttonText.height}
                    buttonWidth={buttonText.width}
                    buttonRadius={buttonText.radius}
                    buttonFontColor={buttonText.fontColor}
                    buttonFontFamily={buttonText.fontFamily}
                    buttonFontSize={buttonText.fontSize}
                    onPress={() => this.handlePress()}
                />
                <Text
                    style={textLight}
                    accessible={true}
                    testID={'increase-count-text'}
                    accessibilityLabel={'increase-count-text'}
                >
                    Pressed {this.state.pressed} times
                </Text>
            </View>
        </View>
    }
}