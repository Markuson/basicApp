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
    flex: 9,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  header: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  section: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-around',
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

  textContainer: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

}