import DeviceData from '../../utils/DeviceData'
import GlobalAspect from '../../styles/GlobalAspect'

export default styles = {

  buttonText: {
    height: 66,
    width: DeviceData.deviceWidth - 100,
    radius: 20,
    color: GlobalAspect.colors.primary,
    fontColor: GlobalAspect.colors.buttonTextColor,
    fontFamily: GlobalAspect.fonts.bold,
    fontSize: GlobalAspect.fonts.normalSize
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textLight: {
    color: GlobalAspect.colors.textColor,
    fontFamily: GlobalAspect.fonts.light,
    fontSize: GlobalAspect.fonts.normalSize
  },

  textBold: {
    color: GlobalAspect.colors.textColor,
    fontFamily: GlobalAspect.fonts.bold,
    fontSize: GlobalAspect.fonts.normalSize
  },

}