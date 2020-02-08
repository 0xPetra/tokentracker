import { StyleSheet } from 'react-native';
import { Colors } from 'App/Theme';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1
  },
  logo: {
    backgroundColor: Colors.white,
    height: hp('10%'),
    margin: hp('5%')
  },
})
