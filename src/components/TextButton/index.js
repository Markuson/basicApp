import React from 'react';
import { TouchableOpacity, Text, Vibration } from 'react-native';

import styles from './TextButton.styles'

export default function IconButton({
  buttonColor,
  buttonHeight,
  buttonRadius,
  buttonWidth,
  buttonFontColor,
  buttonFontFamily,
  buttonFontSize,
  disabled = false,
  onPress,
  title
}) {

  handlePress = () => {
    Vibration.vibrate(50);
    onPress()
  }

  const { textButton, text } = styles

  return (
    <TouchableOpacity disabled={disabled} onPress={() => this.handlePress()} style={[textButton, { height: buttonHeight, width: buttonWidth, borderRadius: buttonRadius, backgroundColor: buttonColor }]}>
      <Text style={{ color: buttonFontColor, fontFamily: buttonFontFamily, fontSize: buttonFontSize }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
