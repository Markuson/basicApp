import React, { useContext } from 'react'
import { Alert, Text, View, Button } from 'react-native'
import { Context } from '../../components/Context'

import styles from './MainScreen.styles'
import GlobalStyles from '../../styles/GlobalStyles';

import TextButton from '../../components/TextButton'

export default function MainScreen() {

    const { pressed, handlePress, setPressed } = useContext(Context)

    const { buttonText, container, textLight } = styles

    const onPress = () => {
        handlePress()
    }

    return (
        <View
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
                    onPress={onPress}
                />
                <Button title={'press'} onPress={onPress} />
                <Text
                    style={textLight}
                    accessible={true}
                    testID={'increase-count-text'}
                    accessibilityLabel={'increase-count-text'}
                >
                    Pressed {pressed} times
                    </Text>
            </View>
        </View>

    )
}