import { put, select } from 'redux-saga/effects'
import { fetchData } from './FetchDataSaga'
import NavigationService from '../Services/NavigationService'

export function* setUser() {
  // We fetch data from the user 
  const fetchUser = (state) => state.address;
  const address = yield select(fetchUser)
  yield fetchData(address);
}

export function* logoutUser() {
  // We logout and move to the intro again 
  NavigationService.navigateAndReset('Intro');
}


