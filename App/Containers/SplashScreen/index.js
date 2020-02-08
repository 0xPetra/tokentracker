import React from 'react'
import { Text, View, ActivityIndicator, Image } from 'react-native'
import styles from './SplashScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={[Helpers.fillRowCenter, styles.container]}>
        <View>
          <Image style={styles.logo} source={Images.logo} resizeMode={'contain'} />
          {/* Optional loading */}
          <ActivityIndicator color={Colors.brand} size='small'/>
        </View>
      </View>
    )
  }
}
