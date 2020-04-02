import { Platform } from 'react-native';

import DeviceData from '../utils/DeviceData'
import GlobalAspect from '../styles/GlobalAspect'

export default {

    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 0 : 0
    },

    appBody: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },

    appContainer: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    appFooter: {
        flex: 1,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    appHeader: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems:  'center',
        justifyContent: 'space-between',
        width: DeviceData.deviceWidth,
        paddingHorizontal: 10
    },

    linkText: {
        color: GlobalAspect.colors.linkColor,
        fontFamily: GlobalAspect.fonts.light,
        fontSize: GlobalAspect.fonts.normalSize
    },

    TextInfo: {
        color: GlobalAspect.colors.grey,
        fontFamily: GlobalAspect.fonts.numericLight,
        fontSize: GlobalAspect.fonts.smallSize,
        textAlign: 'center'
    },
}