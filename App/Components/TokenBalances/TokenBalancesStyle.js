import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Helpers, Metrics, Fonts, Colors } from '../../Theme'

export default StyleSheet.create({
  text: {
    ...Fonts.normal,
    marginBottom: Metrics.tiny,
    paddingHorizontal: hp('3%'),
    width: wp('100%'),
  },
  error: {
    alignSelf: 'center', 
    color: Colors.error,
}
})
