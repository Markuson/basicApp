import React from 'react'
import { Text, View } from 'react-native'


import styles from './ConnectScreen.styles'
import GlobalStyles from '../../styles/GlobalStyles';

import TextButton from '../../components/TextButton'

export default function ConnectScreen({ connectionId, user, wsOpen, onCSConnect, onConnect }) {

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
                        title="Connect"
                        buttonColor={buttonText.color}
                        buttonHeight={buttonText.height}
                        buttonWidth={buttonText.width}
                        buttonRadius={buttonText.radius}
                        buttonFontColor={buttonText.fontColor}
                        buttonFontFamily={buttonText.fontFamily}
                        buttonFontSize={buttonText.fontSize}
                        onPress={onCSConnect}
                    />
                    <Text
                        style={textLight}
                        accessible={true}
                        testID={'data-connectionId'}
                        accessibilityLabel={'data-connectionId'}
                    >
                        connection id: {connectionId}
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
                        onPress={onConnect}
                    />
                </View>
            }
        </View>
    )
}