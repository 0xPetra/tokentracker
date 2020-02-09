import { put, select } from 'redux-saga/effects'
import { fetchData } from './FetchDataSaga'
import NavigationService from '../Services/NavigationService'

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html

  const fetchUser = (state) => state.address;
  const address = yield select(fetchUser);
  
  if (!!address.address) {
    // if the user has an Address we will trigger the fetchData Saga
    yield fetchData(address);
    // if the user has an Address s/he will be redirected to Main Screen
    NavigationService.navigateAndReset('Main');
  } else {
    // TODO: Check if first login
    
    // if the user DOESNT have an Address s/he will be redirected to the IntroScreen
    NavigationService.navigateAndReset('Intro');
    
    // NavigationService.navigateAndReset('SetAccount');
  }
}
