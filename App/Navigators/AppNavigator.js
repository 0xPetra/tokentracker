import { createAppContainer, createStackNavigator } from 'react-navigation'

import MainScreen from 'App/Containers/Main'
import IntroScreen from 'App/Containers/Intro'
import SetAccountScreen from 'App/Containers/SetAccountScreen'
import SplashScreen from 'App/Containers/SplashScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // The main application screen is our "MainScreen"
    MainScreen: MainScreen,
    SplashScreen: SplashScreen,
    Intro: IntroScreen,
    SetAccount: SetAccountScreen,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
