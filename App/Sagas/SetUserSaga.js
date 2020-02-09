import { put, select } from 'redux-saga/effects'
import { fetchData } from './FetchDataSaga'
import ExampleActions from '../Stores/SetUser/Actions'

export function* setUser() {
  
  // We fetch data from the user 
  const fetchUser = (state) => state.address;
  const address = yield select(fetchUser)
  yield fetchData(address);
}
