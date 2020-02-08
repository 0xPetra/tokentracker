import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './SetAccountScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

class SetAccountScreen extends React.Component {
  componentDidMount() {
    this._fetchUser()
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
          <View>
            {/* <View style={Style.logoContainer}>
              <Image style={Helpers.fullSize} source={Images.logo} resizeMode={'contain'} />
            </View> */}
            <Text style={Style.text}>INTRO INTRO INTRO INTRO</Text>
            <Button
              style={ApplicationStyles.button}
              onPress={() => this._fetchUser()}
              title="Refresh"
            />
          </View>
      </View>
    )
  }

  _fetchUser() {
    this.props.fetchUser()
  }
}

SetAccountScreenScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetAccountScreenScreen)
