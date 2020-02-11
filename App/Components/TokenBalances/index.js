import React from 'react'
import { Text, View, FlatList, RefreshControl } from 'react-native'
import { PropTypes } from 'prop-types'
import Style from './TokenBalancesStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import TokenRow from '../TokenRow'

class TokenBalances extends React.Component {

  state = {
    refreshing: false
  }

  componentDidMount() {
  }

  emptyItem = () => {
    return (<Text style={Style.error}>
      This account doesn't have any tokens.
    </Text>)
  }

  listTitle = () => {
    return (<Text style={Style.text}>
      Ethereum Balances
      </Text>)
  }
  
  render() {
    const {tokenBalances, balancesErrorMessage} = this.props;
    const {refreshing} = this.state;

    return (
      <React.Fragment>
        {balancesErrorMessage &&
        <Text style={Style.error}>
          {'An error ocurred while fetching the balance and the rate.'}
        </Text>
        }
        <FlatList
            // style={{marginTop}}
            data={tokenBalances}
            keyExtractor={item => item.tokenSymbol}
            ListHeaderComponent={this.listTitle()}
            renderItem={({item}) => <TokenRow data={item}/> }
            refreshControl={<RefreshControl
                tintColor={Colors.tintColor}
                colors={[Colors.tintColor]}
                progressBackgroundColor={Colors.white}
                refreshing={refreshing}
                // onRefresh={() => this._onRefresh(refetch)}
                />}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={this.emptyItem()}
        />
      </React.Fragment>
    )
  }
}

TokenBalances.propTypes = {
  address: PropTypes.string,
}

export default (TokenBalances)
