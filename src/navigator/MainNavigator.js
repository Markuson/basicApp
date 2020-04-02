import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialComunityIcons } from 'react-native-vector-icons'

import DeviceData from './../utils/DeviceData'
import MainScreen from './../screens/MainScreen'
import SecondScreen from './../screens/SecondScreen'
import BottomTabIcon from '../components/BottomTabIcon'

const MainNavigator = createMaterialBottomTabNavigator({
    Main: {
         screen: MainScreen,
         navigationOptions: {
            tabBarIcon: ({ focused }) => {
                return <BottomTabIcon name='home' focused={focused} />
            }
         }
    },
    Second: {
         screen: SecondScreen,
         navigationOptions: {
            tabBarIcon: ({ focused }) => {
                return <BottomTabIcon name='calendar' focused={focused} />
            }
         }
    }
}, {
    initialRouteName: 'Posts',
    labeled: false,
    barStyle: {
        backgroundColor: '#fff',
        height: !!DeviceData.android ? 60 : 70
    }
})


export default createAppContainer(MainNavigator)