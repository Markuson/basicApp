import React, { Component } from 'react'
import { Alert, PermissionsAndroid, Text, View } from 'react-native'
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'
import { BleManager } from "react-native-ble-plx"

import TextButton from '../TextButton'

import styles from './BluetoothScan.styles'

export default class BluetoothScan extends Component {

  constructor(props) {
    super(props)
    this.manager = new BleManager()
    this.state = {
      info: 'STOPPED',
      scanning: false
    }
  }

  componentDidMount = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permiso Bluetooth',
          message:
            'Necesitamos tu permiso para poder' +
            'usar el Bluetooth.',
          buttonNegative: 'Denegar',
          buttonPositive: 'Permitir',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('BLE Permision OK');
      } else {
        console.log('BLE permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }



  handlePress = () => {

    if (this.state.scanning) {
      this.setState({info: 'STOPPED', scanning: false})
      this.manager.stopDeviceScan()
      console.log('stopped')
    } else {
      this.manager.startDeviceScan(null,
        null, (error, device) => {
          this.setState({ info: "Scanning..." })
          if (device) {
            console.log(device.name)
          }

          if (error) {
            Alert.alert(error.message)
            this.setState({ info: "ERROR!" })
            return
          }
          this.setState({scanning: true})
        });
    }
  }

  render() {

    const { buttonText, container, textLight } = styles
    const { info, scanning } = this.state

    return <View styles={container}>
      <TextButton
        title={"SCAN"}
        buttonColor={buttonText.color}
        buttonHeight={buttonText.height}
        buttonWidth={buttonText.width}
        buttonRadius={buttonText.radius}
        buttonFontColor={buttonText.fontColor}
        buttonFontFamily={buttonText.fontFamily}
        buttonFontSize={buttonText.fontSize}
        onPress={() => this.handlePress()}
      />

      <Text styles={textLight} textAlign={'center'}>{info}</Text>
    </View>


  }
}
