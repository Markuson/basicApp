import React from 'react';
import { TouchableOpacity, Text, Vibration } from 'react-native';

import styles from './TextButton.styles'

export default function TextButton({
  buttonColor,
  buttonHeight,
  buttonRadius,
  buttonWidth,
  buttonFontColor,
  buttonFontFamily,
  buttonFontSize,
  onPress,
  title
}) {

  handlePress = () => {
    Vibration.vibrate(50);
    onPress()
  }

  const { textButton, text } = styles

  return (
    <TouchableOpacity onPress={() => this.handlePress()} style={[textButton, { height: buttonHeight, width: buttonWidth, borderRadius: buttonRadius, backgroundColor: buttonColor }]}>
      <Text style={{ color: buttonFontColor, fontFamily: buttonFontFamily, fontSize: buttonFontSize }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
