import React, {useContext} from 'react'
import { Text, View } from 'react-native'
import { Context } from '../../components/Context'

import styles from './MainScreen.styles'
import GlobalStyles from '../../styles/GlobalStyles';


export default function SecondScreen (){

    const { pressed } = useContext(Context)

    const { container, textLight } = styles

    return (
        <View
            style={GlobalStyles.appContainer}
            accessible={false}
        >
            <View style={container}>
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