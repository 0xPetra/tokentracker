import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const size = {
  h1: hp('5%'),
  h2: hp('4%'),
  h3: hp('3%'),
  input: 18,
  regular: hp('2%'),
  medium: 14,
  small: 12,
}

export default StyleSheet.create({
  bold: {
    // TODO: Add custom font Roboto
    // fontFamily: 'RobotoMono-bold'
  },
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  normal: {
    fontSize: size.regular,
  },
})
