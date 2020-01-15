import React from 'react';
import { TouchableOpacity, Vibration } from 'react-native';
import {MaterialCommunityIcons as Icon} from '@expo/vector-icons'

import styles from './IconButton.styles'

export default function IconButton({
    buttonColor,
    buttonHeight,
    buttonWidth,
    buttonRadius,
    iconSize,
    iconColor,
    name,
    onPress
}) {

  handlePress = () => {
    Vibration.vibrate(50);
    onPress()
  }

  const { iconButton } = styles

  return (
    <TouchableOpacity onPress={() => this.handlePress()} style={[iconButton, { height: buttonHeight, width: buttonWidth, borderRadius: buttonRadius, backgroundColor:buttonColor }]}>
      <Icon name={name} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
}
