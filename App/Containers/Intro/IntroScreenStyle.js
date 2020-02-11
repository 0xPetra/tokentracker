import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Helpers, Metrics, Fonts, Colors } from '../../Theme'
import isIPhoneX from '../../../utils/is-iPhoneX';


export default StyleSheet.create({
  image: {
    flex: 1
  },
  skipContainer: {
    marginTop: isIPhoneX ? hp('5%') : hp('3%'), 
    width: '100%', 
    alignItems: 'flex-end', 
    paddingHorizontal: wp('5%')
  },
  skipBtn: {
    alignSelf: 'flex-end'
  },
  nextBtn: {
    backgroundColor: Colors.primary,
    color: Colors.white
  },
  title: {
    color: Colors.primaryPure,
    fontSize: Fonts.h1.fontSize
  },
  subtitle: {
    color: Colors.primary,
    fontSize: Fonts.normal.fontSize
  },
  footer: { 
    flexDirection: 'row', 
    flex: 1, 
    justifyContent: 'space-around', 
    alignItems: 'center'
  }
})
