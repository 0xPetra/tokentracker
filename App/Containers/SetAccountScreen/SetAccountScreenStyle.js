import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from '../..//Theme'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import isIPhoneX from '../../../utils/is-iPhoneX';

export default StyleSheet.create({
  header: {
    flex: 1, 
    marginTop: isIPhoneX ? hp('5%') : hp('3%'), 
    paddingHorizontal: wp('5%'),
    justifyContent: 'center'
  },
  title: {
    color: Colors.black,
    fontWeight: '500',
    ...Fonts.h2,
  },
  subtitle: {
    color: Colors.grey,
    fontWeight: '300',
    marginTop: hp('2%'),
    ...Fonts.medium,
  }, 
  searchSection: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textInput: {
    width: wp('90%'),
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: hp('1%'),
    borderWidth: 1,
    borderColor: Colors.ligthGrey,
    borderRadius: 7
  },
  searchIcon: {
      paddingHorizontal: 10,
      transform: [{ rotate: '90deg' }]
  },
  input: {
    width: '80%',
    borderWidth: 0,
    alignSelf: 'center'
  },
  buttonMain: { 
    backgroundColor: Colors.primary,
    width: wp('90%'),
    height: hp('7%'),
    borderRadius: 5, 
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    alignSelf: 'center',
  },
  account: {
    alignSelf: 'center', 
    // marginBottom: hp('1%'),
    color: Colors.grey,
    ...Fonts.medium
  },
  create: {
    color: Colors.primary
  },
  footer: {
    flex: 1, 
  justifyContent: 'space-between', 
  }
})
