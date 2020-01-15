import { Platform } from 'react-native';

import DeviceData from '../utils/DeviceData'

export default {

    colors: {
        buttonTextColor: '#FFF',
        primary: '#0798CE',
        red:'#A31915',
        green:'#91C470',
        shadowColor: '#067199',
        grey: '#c4c4c4',
        darkGrey: '#636363',
        heart: '#ff5c5c',
        textColor: '#000000',
        linkColor: 'blue'
    },

    dimensions: {
        fullWidth: DeviceData.deviceWidth,
        fullHeigth: DeviceData.deviceHeight
    },

    fonts: {
        light: 'Raleway-Light',
        bold: 'Raleway-Bold',
        numericBold: 'Roboto-Bold',
        numericLight: 'Roboto-Light',
        normalSize: 20,
        smallSize: 10,
        bigSize: 30,
        bigIcon: 40,
    },

    paddings: {
        big: 40,
        medium: 20,
        small: 10
    },

    shadow: {
        elevation: 4,
        shadowOffset: { width: 5, height: 5 },
        shadowBlur: 15,
        shadowColor: '#666',
        shadowOpacity: 0.2
    },
}