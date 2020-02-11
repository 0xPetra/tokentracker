import React from 'react';
import { Text, View, Linking, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import NavigationService from '../../Services/NavigationService';
import SetUser from '../../Stores/SetUser/Actions';
import Style from './SetAccountScreenStyle';
import { ApplicationStyles, Helpers, Images, Metrics, Colors, Fonts } from '../../Theme';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Background from '../../Components/Background';
import MaterialIcons from '../../Components/MaterialIcons'
import TEXTS from '../../Constants/texts';

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
    let isEthAddress = !!address
      if (isEthAddress) {
        this.props.setUser(address)
        NavigationService.navigateAndReset('Main');
    } else {
          Alert.alert(
            'Invalid Address',
            'Make sure this is a Public Key from an Ethereum Address',
            [
                {
                    text: 'OK'
                },
            ],
        )
        this.onError();
    }
  }

  render() {
    const { textInputBorder } = this.state;

    return (
      <Background>
      <View style={Style.header}>
        <Text style={Style.title}>{TEXTS.SIGNUP.title}</Text>
        <Text style={Style.subtitle}>{TEXTS.SIGNUP.subtitle}</Text>
      </View>
      
      <View style={Style.searchSection}>
          <View style={Style.textInput}>
            <MaterialIcons
            // TODO: Seatch outlined version https://material-ui.com/components/material-icons/
                name={'wallet-outline'}
                size={hp('3.5%')}
                color={Colors.grey}
                style={Style.searchIcon}
                />
            <TextInput
                multiline={false}
                maxLength={42}
                placeholder={'Ethereum Address'}
                placeholderTextColor={Colors.black}
                fontSize={hp('2.5%')}
                fontWeight={'300'}
                autoCapitalize='none'
                onChangeText={address => this.setState({ address })}
                style={[Style.input, {borderColor: textInputBorder}]}
                floatOnFocus
                underlineColorAndroid={"transparent"}
                />
            </View>
      </View>
      
      <View style={Style.footer}>
        <View style={{flex: 1}}/>

        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => this.validateAndSet()}
            style={Style.buttonMain}
            >
              <Text style={[Fonts.medium, {color: Colors.white, fontWeight: '300'}]}>
                Sign In
              </Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={Style.account}>
            {TEXTS.SIGNUP.account}
            <Text onPress={() => {
              Linking.canOpenURL(`https://mycrypto.com/generate`)
              .catch(err => console.error("Couldn't load page", err))
              }} 
              style={Style.create}>
              {TEXTS.SIGNUP.create}
            </Text>
          </Text>
        </View>
        </View>
        <KeyboardSpacer/>
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
