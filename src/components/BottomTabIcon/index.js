import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import GlobalAspect from '../../styles/GlobalAspect'

const BottomTabIcon = ({ name, focused }) => {
    return <Icon name={name} size={30} style={{ height: 30, width: 30 }} color={!focused ? GlobalAspect.colors.grey : GlobalAspect.colors.primary} />
}

export default BottomTabIcon