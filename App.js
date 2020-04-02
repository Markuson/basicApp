import React, { Component } from 'react'
import { Alert, SafeAreaView, View, StatusBar } from 'react-native'
import 'react-native-get-random-values'
import { v1 as uuidv1 } from 'uuid';

import GlobalStyles from './src/styles/GlobalStyles'

import MainScreen from './src/screens/MainScreen'
import ConnectScreen from './src/screens/ConnectScreen';
import DisconnectScreen from './src/screens/DisconnectScreen';
import MainNavigator from './src/navigator/MainNavigator';

const AppContext = React.createContext()

export default class App extends Component {
  constructor(props) {
    super(props);
    this.ws
  }

  state = {
    data: '',
    idTag: '',
    authMsg: '',
    chargePointId: '',
    connectMsg: '',
    connectionId: '',
    disconnectMsg: '',
    password: '',
    status: '',
    user: '',
    wsOpen: false
  }

  componentDidMount = () => {
    const user = 'test_user1.1@eosp.org'
    const password = 'test_user1.1'
    const chargePointId = 'Charge Station 1.1 - CP1'
    this.setState({ user, password, chargePointId })
    this.ocppConnect(user)
  }

  ocppConnect = (user) => {
    // this.ws = new WebSocket(`ws://155.210.139.83:9003/eosp/ws/users/${user}`);
    this.ws = new WebSocket(`ws://192.168.1.7:8080/${encodeURIComponent(user)}`)
    this.ws.onopen = () => {
      Alert.alert('CONNECTED')
      this.setState({ wsOpen: true })
    }
    this.ws.onclose = () => {
      Alert.alert('DISCONNECTED')
      this.setState({ wsOpen: false })
    }

    this.ws.onmessage = (e) => {
      (async () => {
        const response = await JSON.parse(e.data)
        if (response[0]=== 3){
          const [, msgId, res] = response
          this.ocppCSResponse(msgId, res)
        }else{
          const [,msgId, command, res] = response
          this.ocppCPResponse(msgId, command, res)
        }
      })();
    }
  }

  ocppCSResponse = async (msgId, res) => {
    switch(msgId){
      case this.state.authMsg:
        const { status, data } = res
        const response = await JSON.parse(data)
        this.setState({ status, idTag: response.id_tag })
        break

      case this.state.connectMsg:
        const { connection_id } = res
      this.setState({ connectionId: connection_id })
      break

      case this.state.disconnectMsg:
        this.setState({ connectionId: 'CS DISCONNECTED' })
        break

      default:
        Alert.alert('oter message')
    }
  }

  ocppCPResponse = (msgId, command, res) => {
    const message = [
      3,
      msgId,
      res
    ]

    this.ocppSend(message)
  }

  ocppSend = (message) => {
    try {
      this.ws.send(JSON.stringify(message))
    } catch (error) {
      Alert.alert(error.message)
    }
  }


  handleAuthenticate = () => {
    const msgId = uuidv1()
    this.setState({ authMsg: msgId })

    const data = {
      user: encodeURIComponent(this.state.user),
      password: this.state.password
    }

    const message = [
      2,
      msgId,
      'DataTransfer',
      {
        vendorId: 'es.energyonsite',
        messageId: 'authenticate',
        data: JSON.stringify(data)
      }
    ]

    this.ocppSend(message)
  }

  handleConnect = () => {
    const msgId = uuidv1()
    this.setState({ connectMsg: msgId })

    const data = {
      chargePointId: encodeURIComponent(this.state.chargePointId)
    }

    const message = [
      2,
      msgId,
      'DataTransfer',
      {
        vendorId: 'es.energyonsite',
        messageId: 'connect_charge_point',
        data: JSON.stringify(data)
      }
    ]

    this.ocppSend(message)
  }

  handleDisconnect = () => {
    const msgId = uuidv1()
    this.setState({ disconnectMsg: msgId })

    const data = {
      connection_id: this.state.connectionId
    }

    const message = [
      2,
      msgId,
      'DataTransfer',
      {
        vendorId: 'es.energyonsite',
        messageId: 'disconnect_charge_point',
        data: JSON.stringify(data)
      }
    ]

    this.ocppSend(message)
  }

  render() {
    const {
      state:{
        idTag,
        chargePointId,
        connectionId,
        password,
        status,
        user,
        wsOpen
      },
      handleAuthenticate,
      handleConnect,
      handleDisconnect
    } = this
    return <View style={{ flex: 1 }} accessible={true} testID={"app-root"} accessibilityLabel={"app-root"} >
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={GlobalStyles.droidSafeArea} accessible={false}>
        {/* <MainScreen idTag={idTag} status={status} user={user} wsOpen={wsOpen} onAuthenticate={handleAuthenticate} onConnect={this.ocppConnect}/> */}
        {/* <ConnectScreen connectionId={connectionId} user={user} wsOpen={wsOpen} onCSConnect={handleConnect} onConnect={this.ocppConnect}/> */}
        {/* <DisconnectScreen connectionId={this.state.data} user={user} wsOpen={wsOpen} onCSDisconnect={handleDisconnect} onConnect={this.ocppConnect}/> */}
        <MainNavigator />
      </SafeAreaView>
    </View>

  }


}

