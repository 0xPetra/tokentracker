import React from 'react'
import { connect } from 'react-redux';
import SetUser from '../../Stores/SetUser/Actions';
import { Text, View, Image, Alert } from 'react-native'
import { PropTypes } from 'prop-types'
import Style from './HeaderMainStyle'
import { Helpers, Images, Fonts } from '../../Theme';
import NumberFormat from 'react-number-format'

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
                  this.props.logoutUser('')
                }
            },
        ],
    ))
  };
  

  render() {
    const {address, tokenBalances} = this.props;
    const value = tokenBalances !== {} ? 
                    tokenBalances.reduce((acc, currentVal) => {return currentVal.price * currentVal.balance + acc}, 0) 
                    : 
                    0
    return (
      <View style={Style.container}>
        <Image style={Style.headerBackground} source={Images.headerBackground} resizeMode={'stretch'} />
        <View style={Style.boxes}>
          <Text style={[Fonts.bold, Style.home]}>Home</Text>
          <Text style={[Fonts.h3, Style.title]}>Good day,</Text>
          {/* UX Suggestion: Add edit pen */}
          <Text style={[Fonts.h3, Style.address]} onPress={() => this.cleanAddress()}>{address.slice(0, 6)}...</Text>
        </View>
        <View style={Style.boxesFixed}>
          <View style={[Helpers.mainCenter, Style.balanceBox]}>
            <Text style={[Fonts.normal, Style.balance]}>Balance</Text>
              <NumberFormat 
                fixedDecimalScale={true}
                decimalScale={2}
                value={value} 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'$'} 
                renderText={value => <Text style={[Fonts.h2, Style.amount]}>{value}</Text>}
              />
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
  logoutUser: () => dispatch(SetUser.logoutUser()),
})

export default connect(
  null,
  mapDispatchToProps
)(HeaderMain)
