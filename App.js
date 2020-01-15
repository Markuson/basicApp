import React from 'react'
import { SafeAreaView, View, Text, StatusBar } from 'react-native'

import GlobalStyles from './src/styles/GlobalStyles'

import MainScreen from './src/screens/MainScreen'

const App = () => {
  return (
    <View style={{ flex: 1 }} accessible={true} testID={"app-root"} accessibilityLabel={"app-root"} >
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={GlobalStyles.droidSafeArea} accessible={false}>
        <MainScreen />
      </SafeAreaView>
    </View>
  )
}

export default App;
