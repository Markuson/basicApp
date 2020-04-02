import React from 'react'
import { Text, View } from 'react-native'


import styles from './MainScreen.styles'
import GlobalStyles from '../../styles/GlobalStyles';

import TextButton from '../../components/TextButton'

export default function MainScreen({ idTag, status, user, wsOpen, onAuthenticate, onConnect }) {

    const { buttonText, container, header, textLight } = styles



    return (

        <View
            style={GlobalStyles.appContainer}
            accessible={false}
        >
            <View style={header}>
                <Text
                    style={textLight}
                    accessible={true}
                    testID={'user-text'}
                    accessibilityLabel={'user-text'}
                >
                    USER: {user}
                </Text>
            </View>
            {wsOpen &&
                <View style={container}>
                    <TextButton
                        title="Authenticate"
                        buttonColor={buttonText.color}
                        buttonHeight={buttonText.height}
                        buttonWidth={buttonText.width}
                        buttonRadius={buttonText.radius}
                        buttonFontColor={buttonText.fontColor}
                        buttonFontFamily={buttonText.fontFamily}
                        buttonFontSize={buttonText.fontSize}
                        onPress={onAuthenticate}
                    />
                    <Text
                        style={textLight}
                        accessible={true}
                        testID={'data-status'}
                        accessibilityLabel={'data-status'}
                    >
                        status: {status}
                    </Text>
                    <Text
                        style={textLight}
                        accessible={true}
                        testID={'data-message'}
                        accessibilityLabel={'data-message'}
                    >
                        idTag: {idTag}
                    </Text>

                </View>
            }
            {!wsOpen &&
                <View style={container}>
                    <TextButton
                        title="Reconnect"
                        buttonColor={buttonText.color}
                        buttonHeight={buttonText.height}
                        buttonWidth={buttonText.width}
                        buttonRadius={buttonText.radius}
                        buttonFontColor={buttonText.fontColor}
                        buttonFontFamily={buttonText.fontFamily}
                        buttonFontSize={buttonText.fontSize}
                        onPress={() => onConnect}
                    />
                </View>
            }
        </View>
    )
}