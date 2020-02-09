import React from 'react'
import { connect } from 'react-redux';
import SetUser from '../../Stores/SetUser/Actions';
import { Text, View, Image, Alert } from 'react-native'
import { PropTypes } from 'prop-types'
import Style from './HeaderMainStyle'
import { Helpers, Images, Fonts } from '../../Theme';
import NavigationService from '../../Services/NavigationService'


class HeaderMain extends React.Component {
  
  componentDidMount() {
  }

  cleanAddress() {
    return (
      Alert.alert(
        'Switch Address',
        'Do you want to set another Ethereum address?',
        [
            {
              text: 'Cancel',
            },
            {
              text: 'OK', onPress: () => {
                  this.props.setUser('');
                  NavigationService.navigateAndReset('Intro');
                }
            },
        ],
    ))
  };
  

  render() {
    const {address} = this.props;
    return (
      <View style={{ flex: 2 }}>
        <Image style={[Style.headerBackground]} source={Images.headerBackground} resizeMode={'contain'} />
        <View style={Style.boxes}>
          <Text style={[Fonts.bold, Style.home]}>Home</Text>
          <Text style={[Fonts.h3, Style.title]}>Good day,</Text>
          {/* UX Suggestion: Add edit pen */}
          <Text style={[Fonts.h3, Style.address]} onPress={() => this.cleanAddress()}>{address.slice(0, 6)}...</Text>
        </View>
        <View style={Style.boxes}>
          <View style={[Helpers.mainCenter, Style.balanceBox]}>
            <Text style={[Fonts.normal, Style.balance]}>Balance</Text>
            {/* TODO: Add mask for amounts */}
            <Text style={[Fonts.h2, Style.amount]}>$2000</Text>
          </View>
        </View>
      </View>
    )
  }
}

HeaderMain.propTypes = {
  address: PropTypes.string,
  setUser: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (address) => dispatch(SetUser.setUser(address)),
})

export default connect(
  null,
  mapDispatchToProps
)(HeaderMain)
