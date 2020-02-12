import React from 'react'
import { connect } from 'react-redux'
import { Text, FlatList, RefreshControl } from 'react-native'
import { PropTypes } from 'prop-types'
import FetchDataActions from '../../Stores/FetchData/Actions'
import Style from './TokenBalancesStyle'
import { Colors } from 'App/Theme'
import TokenRow from '../TokenRow'

class TokenBalances extends React.Component {

  state = {
    refreshing: false
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

  _onRefresh = async () => {
    const { address } = this.props;
    this.setState({ refreshing: true })
    const response = await this.props.fetchData(address);
    // console.log('response', response)
    if (response === 'ok') {
      this.setState({ refreshing: false });
    }
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
                onRefresh={() => this._onRefresh()}
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

const mapDispatchToProps = (dispatch) => ({
  fetchData: (address) => dispatch(FetchDataActions.fetchData(address)),
})

export default connect(
  null,
  mapDispatchToProps
)(TokenBalances)
