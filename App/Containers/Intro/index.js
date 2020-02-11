import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Style from './IntroScreenStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from '../../Components/MaterialIcons'
import { ApplicationStyles, Helpers, Images, Metrics, Colors, Fonts } from '../../Theme'
import Background from '../../Components/Background';
import TEXTS from '../../Constants/texts';
import NavigationService from '../../Services/NavigationService'

class IntroScreen extends React.Component {
  state = {
    iterator: 0
  }

  iterateNext() {
    let { iterator } = this.state;
    if (iterator < 2) {
      this.setState({ iterator: iterator + 1 })
    } else {
      NavigationService.navigate('SetAccount');
    }
  }

  myButton = () => {
    return ( 
    // TODO: COmponenticize
    <TouchableOpacity
    onPress={() => this.iterateNext()}
    style={{ 
      backgroundColor: Colors.primary,
      width: wp('30%'),
      height: hp('5%'),
      borderRadius: 5, 
      borderwidth: wp('35%'), 
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center',
      paddingHorizontal:wp('3%')
    }}
    >
      <Text style={{color: Colors.white }}>
        Next
      </Text>
      <View style={{heigth: hp('3%'), borderLeftWidth: 1, borderColor: Colors.greyTranslucid}}>
      <MaterialIcons
                name={'chevron-right'}
                size={hp('3%')}
                color={Colors.white}
                />
      </View>
    </TouchableOpacity>
  )}

  render() {
    const { iterator } = this.state;
    return (
      <Background>
        <View style={{flex: 1}}>

        <View style={Style.skipContainer}>
        <Button
          style={Style.skipBtn}
          color={Colors.black}
          size={Fonts.normal}
          onPress={() => NavigationService.navigate('SetAccount')}
          title="Skip"
        />
        </View>

        <View style={{ flex: 3 }}>
          <Image style={Style.image} source={Images[TEXTS.INTRO[iterator].image]} resizeMode={'contain'} />
        </View>

        <View style={{ flex: 2, padding: wp('5%') }}>
          <Text style={Style.title}>{TEXTS.INTRO[iterator].title}</Text>
          <Text style={Style.subtitle}>{TEXTS.INTRO[iterator].subtitle}</Text>
        </View>

        <View style={Style.footer}>
          <Image source={Images.smallLines} resizeMode={'contain'} />
          {this.myButton()}
        </View>

            </View>
      </Background>
    )
  }
}

export default (IntroScreen)
