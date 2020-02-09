import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Helpers, Metrics, Fonts, Colors } from '../../Theme'

export default StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0.5,
    padding: wp('5%'),
    borderBottomColor: Colors.ligthGrey,
    borderColor: 'transparent'
  },
  monthlySalary: {
    height: hp('4%'),
    width: hp('4%'),
  },
  monthlySalaryBack: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('7%'),
    width: hp('7%'),
    backgroundColor: Colors.primaryTranslucid,
    borderRadius: 35
  },
  middleBox: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'column',

  },
  sideBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  balance: {
    color: Colors.grey,
    fontSize: hp('1.5%')
  },
  balanceMoney: {
    color: Colors.secondary,
    // fontSize: hp('1.5%')
  },
  tokenName: {
    color: Colors.black
  }
})
