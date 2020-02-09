import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  image: {
    flex: 1
  },
  skipBtn: {
    color: Colors.black,
    justifyContent: 'flex-end',
    height: hp('10%')
  },
  nextBtn: {
    backgroundColor: Colors.primary,
    color: Colors.white
  }
})
