import { put } from 'redux-saga/effects'
import ExampleActions from 'App/Stores/Example/Actions'
import NavigationService from 'App/Services/NavigationService'

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(ExampleActions.fetchUser())

  // if the user has an Address s/he will be redirected to Main Screen
  // NavigationService.navigateAndReset('Main');

  
  // if the user DOESNT have an Address s/he will be redirected to the IntroScreen
  // NavigationService.navigateAndReset('Intro');
}
