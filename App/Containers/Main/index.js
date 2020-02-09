import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image, StatusBar} from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import HeaderMain from '../../Components/HeaderMain'
import TokenBalances from '../../Components/TokenBalances'
import Style from './MainScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'
import { Colors } from '../../Theme'

class MainScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    const {address, balancesLoading} = this.props;
    return (
      <View style={{ flex: 1,  }}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <HeaderMain 
          address={address} 
        />
        <View style={{flex: 3}}>
        {balancesLoading ?
          <ActivityIndicator size="large" color={Colors.brand} />
          :
          <TokenBalances 
            tokenBalances={this.props.tokenBalances}
            balancesErrorMessage={this.props.balancesErrorMessage}
          />
          }
        </View>
      </View>
    )
  }
}

MainScreen.propTypes = {
  address: PropTypes.string,
  tokenBalances: PropTypes.array,
  balancesLoading: PropTypes.bool,
  balancesErrorMessage: PropTypes.string,
}

const mapStateToProps = (state) => ({
  address: state.address.address,
  tokenBalances: state.balances.tokenBalances,
  balancesLoading: state.balances.balancesLoading,
  balancesErrorMessage: state.balances.balancesErrorMessage,
})

export default connect(mapStateToProps)(MainScreen)
