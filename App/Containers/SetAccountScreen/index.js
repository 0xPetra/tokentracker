import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import NavigationService from '../../Services/NavigationService'
import SetUser from '../../Stores/SetUser/Actions'
import Style from './SetAccountScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from '../../Theme';
import Background from '../../Components/Background';

class SetAccountScreen extends React.Component {
  
  state = {
    address: '',
    textInputBorder: Colors.ligthGrey
  }

  // componentDidMount() {
  // }

  onError = () => {
    this.setState({ textInputBorder: Colors.error })
  }

  validateAndSet = () => {
    const { address } = this.state;
    //  TODO: Add web3 Eth address verification
    // https://ethereum.stackexchange.com/questions/1374/how-can-i-check-if-an-ethereum-address-is-valid
    // web3.utils.toChecksumAddress(rawInput)
    let isEthAddress = !!address;  
      if (isEthAddress) {
        this.props.setUser(address)
        NavigationService.navigateAndReset('Main');
    } else {
        this.onError()
    }
  }

  render() {
    const { textInputBorder } = this.state;

    return (
      <Background>
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
            <TextInput
                multiline={false}
                maxLength={42}
                placeholder={'Ethereum Address'}
                autoCapitalize='none'
                onChangeText={address => this.setState({ address })}
                style={[{width: '80%',borderWidth: 1,borderColor: Colors.primary, alignSelf: 'center'}, {borderColor: textInputBorder}]}
                floatOnFocus
                underlineColorAndroid={"transparent"}
            />
            <Button
              style={ApplicationStyles.button}
              onPress={() => this.validateAndSet()}
              title="Refresh"
            />
            <KeyboardSpacer/>
          </View>
      </View>
      </Background>
    )
  }
}

SetAccountScreen.propTypes = {
  address: PropTypes.string,
  setUser: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (address) => dispatch(SetUser.setUser(address)),
})

export default connect(
  null,
  mapDispatchToProps
)(SetAccountScreen)
