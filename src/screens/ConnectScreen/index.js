import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import {Context} from '../../components/Context'


import styles from './ConnectScreen.styles'
import GlobalStyles from '../../styles/GlobalStyles';

import TextButton from '../../components/TextButton'

export default function ConnectScreen() {

    const { buttonText, container, header, textLight } = styles

    const { resMsg, connectMsg, connectionId, user, wsOpen, handleConnect, handleReconnect} = useContext(Context)

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
                        onPress={() => handleConnect()}
                    />
                    <Text
                        style={textLight}
                        accessible={true}
                        testID={'data-connectionId'}
                        accessibilityLabel={'data-connectionId'}
                    >
                        connection id: {connectionId}
                    </Text>
                    <Text
                        style={textLight}
                        accessible={true}
                        testID={'data-msg'}
                        accessibilityLabel={'data-msg'}
                    >
                        msg: {connectMsg}
                    </Text>
                    <Text
                        style={textLight}
                        accessible={true}
                        testID={'data-msg'}
                        accessibilityLabel={'data-msg'}
                    >
                        msg: {resMsg}
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
                        onPress={() => handleReconnect()}
                    />
                </View>
            }
        </View>
    )
}