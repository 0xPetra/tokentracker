import React from 'react'
import { View, ActivityIndicator, StatusBar, Alert} from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import HeaderMain from '../../Components/HeaderMain'
import TokenBalances from '../../Components/TokenBalances'
import Style from './MainScreenStyle'
import { Colors } from '../../Theme'

class MainScreen extends React.Component {
  
  componentDidMount() {
    // this.checkForErrors()
  };

  checkForErrors() {
    const {balancesLoading, balancesErrorMessage} = this.props;
    if (!balancesLoading && balancesErrorMessage) {
      Alert.alert(
        'Error',
        `There was an error fetching balances and rates for the selected tokens.`,
        [
            {
                text: 'OK',
                onPress: () => {}
            },
        ],
        {cancelable: false}
    )
    }
  }

  render() {
    const {address, balancesLoading, tokenBalances} = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <HeaderMain 
          tokenBalances={tokenBalances}
          address={address} 
        />
        <View style={{flex: 3}}>
        {balancesLoading ?
          <ActivityIndicator size="large" color={Colors.primary} />
          :
          <TokenBalances 
            tokenBalances={tokenBalances}
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
  balancesErrorMessage: PropTypes.object,
}

const mapStateToProps = (state) => ({
  address: state.address.address,
  tokenBalances: state.balances.tokenBalances,
  balancesLoading: state.balances.balancesLoading,
  balancesErrorMessage: state.balances.balancesErrorMessage,
})

export default connect(mapStateToProps)(MainScreen)
