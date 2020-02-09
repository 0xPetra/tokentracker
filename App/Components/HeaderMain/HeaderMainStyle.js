import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Helpers, Metrics, Fonts, Colors } from '../../Theme'

export default StyleSheet.create({
  headerBackground: {
    position: 'absolute',
    marginTop: 0,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 3,
      width: 0
    }
  },
  boxes: {
    flex: 1, 
    padding: hp('3%'),
  },
  home: {
    color: Colors.white,
    alignSelf: 'center',
    fontSize: hp('2%'),
    marginTop: hp('3%')
  },
  title: {
    color: Colors.white,
    textAlignVertical: 'bottom',
    fontWeight: "200"
  },
  balance: {
    color: Colors.blackPure,
    textAlign: 'center',
    fontWeight: '500'
  },
  amount: {
    color: Colors.secondary,
    textAlign: 'center'
  },
  address: {
    color: Colors.white,
    fontWeight: "300"
  },
  balanceBox: {
    padding: hp('3%'),
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    height: hp('10%'),
    width: wp('45%'),
    backgroundColor: Colors.white,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      height: 1,
      width: 0
    }
  }
})
