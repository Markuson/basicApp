import React, { useEffect, useState, useRef } from 'react'
import { Alert, SafeAreaView, View, StatusBar } from 'react-native'
import 'react-native-get-random-values'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { v1 as uuidv1 } from 'uuid';


import { Context } from './src/components/Context'

import GlobalStyles from './src/styles/GlobalStyles'

import MainScreen from './src/screens/MainScreen'
import ConnectScreen from './src/screens/ConnectScreen';
import DisconnectScreen from './src/screens/DisconnectScreen';

const Tab = createBottomTabNavigator()

export default function App() {

  const [chargePointId, setChargePointId] = useState('')
  const [connectionId, setConnectionId] = useState('')
  const [idTag, setIdTag] = useState('')
  const [password, setPassword] = useState('')
  const [reqMessage, setReqMessage] = useState({msgId:'', message:''})
  const [resMessage, setResMessage] = useState('')
  const [status, setStatus] = useState('')
  const [user, setUser] = useState('')
  const [wsOpen, setWsOpen] = useState(false)

  const ws = useRef(null)

  useEffect(() => {
    if (!wsOpen) {
      const user = 'test_user1.1@eosp.org'
      const password = 'test_user1.1'
      const chargePointId = 'Charge Station 1.1 - CP1'
      setUser(user)
      setPassword(password)
      setChargePointId(chargePointId)
      ocppConnect(user)
    }
  }, [])

  useEffect(() => {
    if(reqMessage.msgId){
      alert(reqMessage.message[3].data)
      ocppSend(reqMessage.message)
    }
  }, [reqMessage])

  useEffect(() => {
    if(resMessage){
      try {
        ocppParse()
      } catch (error) {
        alert(`ERROR: ${error.message}`)
      }
    }
  }, [resMessage])

  const ocppConnect = (user) => {
    ws.current = new WebSocket(`ws://155.210.139.83:9003/eosp/ws/users/${encodeURIComponent(user)}`);
    // ws.current = new WebSocket(`ws://192.168.1.7:8080/${encodeURIComponent(user)}`)
    ws.current.onopen = () => {
      Alert.alert('CONNECTED')
      setWsOpen(true)
    }
    ws.current.onclose = () => {
      Alert.alert('DISCONNECTED')
      setWsOpen(false)
    }

    ws.current.onmessage = (e) => {
      alert(e.data)
      setResMessage(e.data)
    }
  }

  const ocppParse = async () =>{
    setReqMessage({msgId:'', message:''})
    let response = await JSON.parse(resMessage)
    if(response[0]==3){
      const[,msgId,res] = response
      if (msgId == reqMessage.msgId) ocppResponse(reqMessage.message[3].messageId, res)
    }else{
      const [, msgId, command, res] = response
      ocppRequest(msgId, command, res)
    }
  }

  const ocppResponse = async (type, res) => {

    switch (type) {
      case 'authenticate':
        Alert.alert('authenticate')
        const { status, data } = res
        if (status == 'Accepted'){
          const response = await JSON.parse(data)
          setStatus(status)
          setIdTag(response.id_tag)
        }else{
          throw new Error(status)
        }
        break

      case 'connect_charge_point':
        const { connection_id } = res
        Alert.alert('connect')
        setConnectionId(connection_id)
        break

      case 'disconnect_charge_point':
        setConnectionId('CS DISCONNECTED')
        break

      default:
        Alert.alert('other message')
    }
  }

  const ocppRequest = (msgId, command, res) => {
    Alert.alert(command)
    const message = [
      3,
      msgId,
      res
    ]

    ocppSend(message)
  }

  const ocppSend = (message) => {
    try {
      ws.current.send(JSON.stringify(message))
    } catch (error) {
      Alert.alert(error.message)
    }
  }


  const handleAuthenticate = async () => {
    const _msgId = uuidv1()

    const data = JSON.stringify({
      user,
      password
    })

    alert(data)

    const message = [
      2,
      _msgId,
      'DataTransfer',
      {
        vendorId: 'es.energyonsite',
        messageId: 'authenticate',
        data
      }
    ]

    setReqMessage({msgId: _msgId, message})
  }

  const handleConnect = () => {
    const _msgId = uuidv1()

    const data = JSON.stringify({
      charge_point_id: chargePointId
    })

    const message = [
      2,
      _msgId,
      'DataTransfer',
      {
        vendorId: 'es.energyonsite',
        messageId: 'connect_charge_point',
        data
      }
    ]

    setReqMessage({msgId: _msgId, message})
  }

  const handleDisconnect = () => {
    const _msgId = uuidv1()

    const data = {
      connection_id: connectionId
    }

    const message = [
      2,
      _msgId,
      'DataTransfer',
      {
        vendorId: 'es.energyonsite',
        messageId: 'disconnect_charge_point',
        data: JSON.stringify(data)
      }
    ]

    setReqMessage({msgId: _msgId, message})
  }

  const handleReconnect = () => {
    ocppConnect(user)
  }

  const api = {
    idTag,
    chargePointId,
    connectionId,
    password,
    status,
    user,
    wsOpen,
    handleAuthenticate,
    handleConnect,
    handleDisconnect,
    handleReconnect
  }

  return (
    <View style={{ flex: 1 }} accessible={true} testID={"app-root"} accessibilityLabel={"app-root"} >
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={GlobalStyles.droidSafeArea} accessible={false}>
        <Context.Provider value={api}>
          <NavigationContainer >
            <Tab.Navigator >
              <Tab.Screen name='Main' component={MainScreen} />
              <Tab.Screen name='Connect' component={ConnectScreen} />
              <Tab.Screen name='Disconnect' component={DisconnectScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </Context.Provider>
      </SafeAreaView>
    </View>
  )
}

