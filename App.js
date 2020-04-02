import React, { Component, useCallback, useMemo,useState } from 'react'
import { Alert, SafeAreaView, View, Text, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Context } from './src/components/Context'

import GlobalStyles from './src/styles/GlobalStyles'

import MainScreen from './src/screens/MainScreen'
import SecondScreen from './src/screens/SecondScreen'
// import MainNavigator from './src/navigator/MainNavigator'

const Tab = createBottomTabNavigator()

export default function App() {
  const [pressed, setPressed] = useState(0)


  const handlePress =() => {
    const _pressed_ = pressed + 1
    setPressed(_pressed_)
  }

  const api = {pressed, setPressed, handlePress}

  return (
    <View style={{ flex: 1 }} accessible={true} testID={"app-root"} accessibilityLabel={"app-root"} >
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={GlobalStyles.droidSafeArea} accessible={false}>
        <Context.Provider value={api}>
          <NavigationContainer >
            <Tab.Navigator >
              <Tab.Screen name='Main' component={MainScreen} />
              <Tab.Screen name='Second' component={SecondScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </Context.Provider>
      </SafeAreaView>
    </View>
  )
}

