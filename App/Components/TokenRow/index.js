import React from 'react'
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import NumberFormat from 'react-number-format'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { PropTypes } from 'prop-types'
import Style from './TokenRowStyle'
import MaterialIcons from '../MaterialIcons'
import { Images, Colors } from '../../Theme'

class TokenRow extends React.Component {
  componentDidMount() {
  }

  render() {
    const {data} = this.props;
    let balance = data.balance.toString().length > 15 ? data.balance.toString().slice(0, 15) + '...' : data.balance;
    let value = data.balance * data.price;
    //  We check there's curently at least one token
    if (!!balance) {
    return (
      <TouchableOpacity onPress={() => Linking.canOpenURL(`https://etherscan.io/token/${data.contractAddress}`)}>
        <View style={Style.row}>
            <View style={Style.sideBox}>
              <View style={Style.monthlySalaryBack}>
                <Image style={Style.monthlySalary} source={Images.monthlySalary} resizeMode={'contain'} />
              </View>
            </View>

            <View style={Style.middleBox}>
              <Text style={Style.tokenName}>{data.tokenName}</Text>
              <Text style={Style.balance}>{balance}</Text>
            </View>

            <View style={Style.sideBox}>
              <NumberFormat 
                value={value}
                fixedDecimalScale={true}
                decimalScale={2}
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'$'} 
                renderText={value => <Text style={Style.balanceMoney}>{value}</Text>}
              />
              <MaterialIcons
                name={'chevron-right'}
                size={hp('4%')}
                color={Colors.grey}
                style={{ alignSelf: "center" }}
              />
            </View>
        </View>
      </TouchableOpacity>
    )} else {
      return null
    }
  }
}

TokenRow.propTypes = {
  address: PropTypes.string,
}

export default (TokenRow)
