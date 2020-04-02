import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createAppContainer } from 'react-navigation'

import DeviceData from './../utils/DeviceData'
import MainScreen from './../screens/MainScreen'
import ConnectScreen from './../screens/ConnectScreen'
import DisconnectScreen from './../screens/DisconnectScreen'
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
    Connect: {
         screen: ConnectScreen,
         navigationOptions: {
            tabBarIcon: ({ focused }) => {
                return <BottomTabIcon name='log-in' focused={focused} />
            }
         }
    },
    Disconnect: {
         screen: DisconnectScreen,
         navigationOptions: {
            tabBarIcon: ({ focused }) => {
                return <BottomTabIcon name='log-out' focused={focused} />
            }
         }
    }
}, {
    initialRouteName: 'Main',
    labeled: false,
    barStyle: {
        backgroundColor: '#fff',
        height: !!DeviceData.android ? 60 : 70
    }
})


export default createAppContainer(MainNavigator)