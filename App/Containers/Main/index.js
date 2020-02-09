import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './MainScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'

class MainScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View
        style={[
          Helpers.fill,
          Helpers.rowMain,
          Metrics.mediumHorizontalMargin,
          Metrics.mediumVerticalMargin,
        ]}
      >
        {this.props.balancesLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            {/* <View style={Style.logoContainer}>
              <Image style={Helpers.fullSize} source={Images.logo} resizeMode={'contain'} />
            </View> */}
            <Text style={Style.text}>{this.props.address}</Text>
            {/* <Text style={Style.text}>{...this.props.tokenBalances}</Text> */}
            {/* {this.props.userErrorMessage ? (
              <Text style={Style.error}>{this.props.userErrorMessage}</Text>
            ) : (
              <View>
                <Text style={Style.result}>
                  {"I'm a fake user, my name is "}
                  {this.props.user.name}
                </Text>
                <Text style={Style.result}>
                  {this.props.liveInEurope ? 'I live in Europe !' : "I don't live in Europe."}
                </Text>
              </View>
            )} */}
            {/* <Button
              style={ApplicationStyles.button}
              onPress={() => this._fetchUser()}
              title="Refresh"
            /> */}
          </View>
        )}
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
  state: state,
  address: state.address.address,
  tokenBalances: state.balances.tokenBalances,
  balancesLoading: state.balances.balancesLoading,
  balancesErrorMessage: state.balances.balancesErrorMessage,
})

export default connect(mapStateToProps)(MainScreen)
