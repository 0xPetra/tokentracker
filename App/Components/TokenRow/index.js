import React from 'react'
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { PropTypes } from 'prop-types'
import Style from './TokenRowStyle'
import MaterialIcons from '../MaterialIcons'
import { ApplicationStyles, Helpers, Images, Metrics, Colors, Fonts } from '../../Theme'

class TokenRow extends React.Component {
  componentDidMount() {
  }

  render() {
    const {data} = this.props;
    console.log('data', data);
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
              <Text style={Style.balance}>{data.balance}</Text>
            </View>
            
            {/* TODO: * data.price */}
            <View style={Style.sideBox}>
              {/* TODO: Mask */}
              <Text style={Style.balanceMoney}>
                ${data.balance.toString().length > 3 ? data.balance.toString().slice(0, 3) + '...' : data.balance }
              </Text>
              <MaterialIcons
                name={'keyboard-arrow-right'}
                size={hp('4%')}
                color={Colors.grey}
                style={{ alignSelf: "center" }}
              />
            </View>
        </View>
      </TouchableOpacity>
    )
  }
}

TokenRow.propTypes = {
  address: PropTypes.string,
}

export default (TokenRow)
